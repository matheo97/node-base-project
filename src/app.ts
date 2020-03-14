import * as bodyParser from 'body-parser';
import * as path from 'path';
import apiDoc from './api-doc';
import commandLineArgs from 'command-line-args';
import cors from 'cors';
import express from 'express';
import { initialize } from 'express-openapi';
import { middlewareErrorHandler } from './utils/errorHandler';
import multer from 'multer';
import { writeFileSync } from 'fs';

const app = express();
const storage = multer.memoryStorage();

const upload = multer({ storage,
  limits: {
    fileSize: 1024 * 1024 * 10, // 10 MB,
  },
});

app.use(cors());
app.use(bodyParser.json());

const apiSpec = initialize({
  app,
  apiDoc,
  paths: path.join(__dirname, 'api', 'paths'),
  errorMiddleware: middlewareErrorHandler,
  consumesMiddleware: {
    'multipart/form-data': (req: any, res: express.Response, next: express.NextFunction) => {
      upload.any()(req, res, err => {
        if (err) { return next(err); }
        req.files.forEach((f: Express.Multer.File) => {
          req.body[f.fieldname] = '';
        });

        return next();
      });
    },
  },

});

// Add a dummy route for root so we pass the health check
app.get('/', (_req: express.Request, res: express.Response) => {
  res.send('Alive!');
});
console.log('OpenAPI initialized');

const optionDefinitions = [
  { name: 'generate-docs', alias: 'd', type: Boolean },
  { name: 'outfile', alias: 'o', type: String },
];
const options = commandLineArgs(optionDefinitions);

if (options['generate-docs']) {
  const outfile = options.outfile || 'openapi.json';
  writeFileSync(outfile, JSON.stringify(apiSpec.apiDoc, null, 2));
  process.exit(0);
} else {
  app.listen(3000);
  console.log('Server ready');
}


module.exports = app;

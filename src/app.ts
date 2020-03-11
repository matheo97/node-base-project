import * as bodyParser from 'body-parser';
import * as path from 'path';
import { apiDoc } from './api/api-doc';
import cors from 'cors';
import express from 'express';
import { initialize } from 'express-openapi';
import { middlewareErrorHandler } from './utils/errorHandler';
import multer from 'multer';

const app = express();
const storage = multer.memoryStorage();

const upload = multer({ storage,
  limits: {
    fileSize: 1024 * 1024 * 10, // 10 MB,
  },
});

app.use(cors());
app.use(bodyParser.json());

initialize({
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
console.log('Server is up and running');

module.exports = app;

app.listen(3000);

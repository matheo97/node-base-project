import * as bodyParser from 'body-parser';
import * as path from 'path';
import { apiDoc } from './api/api-doc';
import cors from 'cors';
import express from 'express';
import { initialize } from 'express-openapi';
const app = express();

app.use(cors());
app.use(bodyParser.json());

initialize({
  app,
  apiDoc,
  paths: path.join(__dirname, 'api', 'paths'),
});

// Add a dummy route for root so we pass the health check
app.get('/', (_req: express.Request, res: express.Response) => {
  res.send('Alive!');
});
console.log('OpenAPI initialized');
console.log('Server is up and running');

module.exports = app;

app.listen(3000);

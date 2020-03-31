/* eslint-disable max-classes-per-file */
import express from 'express';

const middlewareErrorHandler: express.ErrorRequestHandler = (
    error: any, req: express.Request, res: express.Response, _next: express.NextFunction
) => {
  console.error('Error from: ', req.method, req.path);
  console.error(JSON.stringify(error));

  const responseBody: any = {};
  let sanitizedMessage: string;
  if (error.status === 401) {
    sanitizedMessage = error.message;
  } else if (error.status === 403) {
    sanitizedMessage = 'You are not authorized to take this action';
  } else if (error.status === 400) {
    sanitizedMessage = 'Something is wrong with your request. Try again.';
  } else if (error.status === 404) {
    sanitizedMessage = 'Endpoint you are trying to reach does not exists';
  } else {
    sanitizedMessage = 'Something unexpectedly went wrong inside our servers.';
  }
  responseBody.message = sanitizedMessage;
  responseBody.code = error.code;
  res.status(error.status).json(responseBody);
};

export {
  middlewareErrorHandler,
};

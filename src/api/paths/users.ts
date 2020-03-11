import express from 'express';
import { OpenAPIV3 } from 'openapi-types';
import { Operation } from 'express-openapi';

const GET: Operation = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    console.log('asdasdasdas');
    const user = true;
    const statusCode: any = 200;
    throw new Error('Error!!! parcero');
    res.status(statusCode).json(user);
  } catch (err) {
    next(err);
  }
};

GET.apiDoc = {
  summary: 'Get profile settings for this user',
  operationId: 'getUserProfile',
  responses: {
    200: {
      description: 'True if it worked',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Success',
          },
        },
      },
    },
    default: {
      $ref: '#/components/responses/Error',
    },
  },
} as OpenAPIV3.OperationObject;

export default {
  GET,
};

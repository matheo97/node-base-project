import { NextFunction, Request, Response } from 'express';
import { OpenAPIV3 } from 'openapi-types';
import { Operation } from 'express-openapi';

const GET: Operation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const statusCode: any = 200;
    res.status(statusCode).json({ success: true });
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

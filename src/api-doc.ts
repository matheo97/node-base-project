import { OpenAPIV3 } from 'openapi-types';

const apiDoc: OpenAPIV3.Document = {
  openapi: '3.0.0',
  info: {
    title: 'Restful backend v2 API',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Dev server',
    },
  ],
  components: {
    responses: {
      Error: {
        description: 'Operation error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                code: {
                  type: 'string',
                },
                message: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      Success: {
        description: 'Operation Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Success',
            },
          },
        },
      },
    },
    parameters: {
      Code: {
        name: 'code',
        in: 'path',
        required: true,
        schema: {
          type: 'string',
        },
      } as OpenAPIV3.ParameterObject,
    },
    schemas: {
      Success: {
        type: 'object',
        properties: {
          success: {
            type: 'boolean',
            description: 'You probably did something wrong if you set this to false.',
            default: true,
          },
        },
      },
    },
  },
  paths: {},
};

export default apiDoc;


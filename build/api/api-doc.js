"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiDoc = {
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
            UserId: {
                name: 'userId',
                in: 'path',
                schema: {
                    type: 'string',
                },
            },
        },
        schemas: {
            strings: {
                type: 'array',
                items: {
                    type: 'string',
                },
                uniqueItems: true,
            },
            StatusCode: {
                type: 'integer',
            },
            UserId: {
                type: 'string',
            },
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
            Address: {
                type: 'object',
                properties: {
                    address_1: {
                        type: 'string',
                    },
                    address_2: {
                        type: 'string',
                        nullable: true,
                    },
                    city: {
                        type: 'string',
                    },
                    state: {
                        type: 'string',
                    },
                    zip: {
                        type: 'string',
                    },
                },
                required: ['address_1', 'address_2', 'city', 'state', 'zip'],
            },
            DateTime: {
                description: 'Time argument',
                type: 'string',
                format: 'date-time',
            },
            DateTimeNullable: {
                description: 'Time argument',
                type: 'string',
                format: 'date-time',
                nullable: true,
            },
            CreatedAt: {
                type: 'object',
                properties: {
                    created_at: {
                        description: 'Date created',
                        type: 'string',
                        format: 'date-time',
                    },
                },
                required: ['created_at'],
            },
        },
    },
    paths: {},
};
exports.apiDoc = apiDoc;
//# sourceMappingURL=api-doc.js.map
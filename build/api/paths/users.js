"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GET = async (req, res, next) => {
    try {
        console.log('asdasdasdas');
        const user = true;
        const statusCode = 200;
        throw new Error('Error!!! parcero');
        res.status(statusCode).json(user);
    }
    catch (err) {
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
};
exports.default = {
    GET,
};
//# sourceMappingURL=users.js.map
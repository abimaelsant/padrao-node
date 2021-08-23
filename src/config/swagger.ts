import * as path from 'path';
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '.env') });

export default {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "API",
            version: "1.0.0",
            description:
                "API",
        },
        servers: [
            {
                url: process.env.APP_URL
            }
        ]
    },
    apis: [
        'docs/**/*.yml'
    ],
}
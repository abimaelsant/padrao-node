import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path';
import * as https from 'https';
import * as swaggerUI from 'swagger-ui-express';
import * as swaggerJsdoc from 'swagger-jsdoc';
import swaggerDocument from './config/swagger';

import routes from './app/routes';

import './database';

class App {
    public app: express.Application;
    public server: any;

    public constructor() {
        this.app = express(); 
        this.middleware();
        this.routes();
        this.server = process.env.NODE_ENV == 'production' ? https.createServer(require('./config/ssl'), this.app) : this.app;
    }

    private middleware(): void {
        this.app.use(express.json());
        this.app.use(cors({ origin: '*' }));
    }

    private routes(): void {
        const specs = swaggerJsdoc(swaggerDocument);
        this.app.use("/docs", swaggerUI.serve);
        this.app.get(
            "/docs",
            swaggerUI.setup(specs, {
                explorer: true
            })
        )
        this.app.use(
            "/files",
            express.static(path.resolve(process.env.STORAGE_LOCAL))
        );
        this.app.get('/', (req: express.Request, res: express.Response) => {
            res.send('Welcome to API!');
        });

        this.app.use('/api/v1/', routes);
    }
}

export default new App().server;
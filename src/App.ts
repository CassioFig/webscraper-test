import express, { Application, Router } from "express";
import { serve, setup } from "swagger-ui-express";
import swaggerConfig from '@utils/swagger';
import { readdirSync } from "fs";
import { join } from "path";
import cors from 'cors';

class App {
    express: Application;

    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
        this.swagger();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private routes(): void {
        const router = Router()
        readdirSync(join(__dirname, './routes'))
            .filter(file => !file.endsWith('.map'))
            .map(async file => {
                (await import(`./routes/${file}`)).default(router)
            })
            
        this.express.use('/api', router)
    }

    private swagger(): void {
        this.express.use('/api-docs', serve, setup(swaggerConfig))
    }
}

export default new App().express;
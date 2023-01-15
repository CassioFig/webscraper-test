import express, { Application, Router } from "express";
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

    private swagger(): void {}
}

export default new App().express;
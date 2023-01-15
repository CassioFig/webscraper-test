import express, { Application, Router } from "express";
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

    private routes(): void {}

    private swagger(): void {}
}

export default new App().express;
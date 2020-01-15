import * as express from "express";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import * as cors from "cors";
import { createConnection } from "typeorm";
import { Routes } from "./routes/routes";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();


    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json({ limit: '50mb' }));
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        dotenv.config();

        const options: cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", "Authorization"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "*",
            preflightContinue: false
        };
        this.app.use(cors(options));

        createConnection().then(connection => {
        }).catch(error => console.log(error));        
        this.routePrv.routes(this.app);
    }

}

export default new App().app;

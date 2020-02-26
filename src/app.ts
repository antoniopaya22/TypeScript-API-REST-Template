import * as express from "express";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import * as cors from "cors";
import { createConnection, getConnectionOptions } from "typeorm";
import { Routes } from "./routes/routes";
import { User } from "./models/user";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();


    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
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
        this.databaseConnection();
    }

    private databaseConnection(): void {
        const databaseName = process.env.MODE || 'dev';
        getConnectionOptions(databaseName).then(options => {
            createConnection(options).then(connection => {
                connection.synchronize();
                this.app.set('db', connection);
                console.log("The connection to the database has been established in mode: " + databaseName);
            })   
        }).catch(error => console.log(error));;
    }

}

export default new App().app;

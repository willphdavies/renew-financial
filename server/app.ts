import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes";
import * as mongoose from "mongoose";
import * as path from "path";

class App {

    public app: express.Application;
	public routePrv: Routes = new Routes();
	public mongoUrl: string = 'mongodb://localhost/renew';

    constructor() {
		this.app = express();
		this.app.use(express.static(path.join(__dirname,"..","build")))
		this.config();
		this.routePrv.routes(this.app);
		this.mongoSetup()
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
	}
	
	private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }

}

export default new App().app;
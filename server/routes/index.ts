import {Request, Response} from "express";
import { LoanController } from "./loan/loan.controller"
import * as path from "path"


export class Routes {
	public loanCtrl: LoanController = new LoanController()
    public routes(app): void {
		app.route("/")
			.get((req: Request, res: Response) => {
				res.sendFile(path.join(__dirname,"..","..","build","index.html"))
			})
		app.route('/api/loan/:id')
			.get(this.loanCtrl.one)	
        app.route('/api/loan')
			.get(this.loanCtrl.list)
			.post(this.loanCtrl.add)
    }
}
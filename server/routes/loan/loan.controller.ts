import * as mongoose from 'mongoose';
import { LoanSchema, approveLoan } from './loan.model';
import { Request, Response } from 'express';

const Loan = mongoose.model('Loan', LoanSchema);

export class LoanController {
	public list(req: Request, res: Response) {
		Loan.find({}, (err, loans) => {
			if(err){
				res.status(500)
                res.send(err);
            }
            res.json(loans);
		})
	}
	public one(req: Request, res: Response) {
		Loan.find({
			_id: req.params.id
		}, (err,loan) => {
			if(err) {
				res.status(500)
				res.send(err)
			}
			res.json(loan);
		})
	}
	public add (req: Request, res: Response) {
		let loanFields = req.body

		loanFields.approved = approveLoan(loanFields)

		let newLoan = new Loan(loanFields);
		
		newLoan.save((err, loan) => {
			if(err){
				res.send(err);
			}
			res.json(loan);
		});
	}
}
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const LoanSchema = new Schema({
    name: {
        type: String,
        required: 'Enter your name'
    },
    address: {
        type: String,
        required: 'Enter an address'
    },
    income: {
		type: Number
    },
    amount: {
		type: Number
	},
	approved: {
		type: Boolean
	}
}, {
	timestamps: true
});

export function approveLoan(Loan) {
	return (
		Loan.amount >= 5000 
		&& Loan.amount <= 50000 
		&& Loan.amount <= Loan.income * 0.3
	)
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.LoanSchema = new Schema({
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
function approveLoan(Loan) {
    return (Loan.amount >= 5000
        && Loan.amount <= 50000
        && Loan.amount <= Loan.income * 0.3);
}
exports.approveLoan = approveLoan;
//# sourceMappingURL=loan.model.js.map
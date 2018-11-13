"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const loan_model_1 = require("./loan.model");
const Loan = mongoose.model('Loan', loan_model_1.LoanSchema);
class LoanController {
    list(req, res) {
        Loan.find({}, (err, loans) => {
            if (err) {
                res.status(500);
                res.send(err);
            }
            res.json(loans);
        });
    }
    one(req, res) {
        Loan.find({
            _id: req.params.id
        }, (err, loan) => {
            if (err) {
                res.status(500);
                res.send(err);
            }
            res.json(loan);
        });
    }
    add(req, res) {
        let loanFields = req.body;
        loanFields.approved = loan_model_1.approveLoan(loanFields);
        let newLoan = new Loan(loanFields);
        newLoan.save((err, loan) => {
            if (err) {
                res.send(err);
            }
            res.json(loan);
        });
    }
}
exports.LoanController = LoanController;
//# sourceMappingURL=loan.controller.js.map
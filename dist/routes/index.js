"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loan_controller_1 = require("./loan/loan.controller");
const path = require("path");
class Routes {
    constructor() {
        this.loanCtrl = new loan_controller_1.LoanController();
    }
    routes(app) {
        app.route("/")
            .get((req, res) => {
            res.sendFile(path.join(__dirname, "..", "..", "build", "index.html"));
        });
        app.route('/api/loan/:id')
            .get(this.loanCtrl.one);
        app.route('/api/loan')
            .get(this.loanCtrl.list)
            .post(this.loanCtrl.add);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map
import chai from "chai"
import chaiHttp from "chai-http"
import server from "../../dist/server"
let assert = chai.assert
chai.use(chaiHttp)

describe("/api/loan", () => {
	let loans
	beforeEach(() => {
		loans = {
			pass: {
				name: "Will Test",
				address: "31 Test St",
				income: 300000,
				amount: 10000
			},
			failLessThen5000: {
				name: "Will Test",
				address: "31 Test St",
				income: 300000,
				amount: 3000
			},
			failGreaterThan50000: {
				name: "Will Test 50000",
				address: "31 Test St",
				income: 300000,
				amount: 100000
			},
			failIncome: {
				name: "Will Test Income",
				address: "31 Test St",
				income: 30000,
				amount: 11000
			}
		}
	})
	describe("POST", () => {
		describe("Loan approved", () => {
			it("Should return the newly inserted object as approved", done => {
				chai.request(server)
					.post('/api/loan')
					.send(loans.pass)
					.end((err, res) => {
						assert(!Boolean(err), "error was returned")
						assert(res.status === 200, "status not 200")
						assert(res.type === 'application/json', "return type is incorrect")
						assert(res.body.name === loans.pass.name, "Name does not match")
						assert(res.body.address === loans.pass.address, "Address does not match")
						assert(res.body.income === loans.pass.income, "Income does not match")
						assert(res.body.amount === loans.pass.amount, "Amount does not match")
						assert(res.body.approved, "loan not approved")
						done()
					})
			})
			it("Should return the newly inserted object as NOT approved when the loan amount < 5000", done => {
				chai.request(server)
					.post('/api/loan')
					.send(loans.failLessThen5000)
					.end((err, res) => {
						assert(!Boolean(err), "error was returned")
						assert(res.status === 200, "status not 200")
						assert(res.type === 'application/json', "return type is incorrect")
						assert(res.body.name === loans.failLessThen5000.name, "Name does not match")
						assert(res.body.address === loans.failLessThen5000.address, "Address does not match")
						assert(res.body.income === loans.failLessThen5000.income, "Income does not match")
						assert(res.body.amount === loans.failLessThen5000.amount, "Amount does not match")
						assert(res.body.approved === false, "loan IS approved")
						done()
					})
			})
			it("Should return the newly inserted object as NOT approved when the loan amount > 50000", done => {
				chai.request(server)
					.post('/api/loan')
					.send(loans.failGreaterThan50000)
					.end((err, res) => {
						assert(!Boolean(err), "error was returned")
						assert(res.status === 200, "status not 200")
						assert(res.type === 'application/json', "return type is incorrect")
						assert(res.body.name === loans.failGreaterThan50000.name, "Name does not match")
						assert(res.body.address === loans.failGreaterThan50000.address, "Address does not match")
						assert(res.body.income === loans.failGreaterThan50000.income, "Income does not match")
						assert(res.body.amount === loans.failGreaterThan50000.amount, "Amount does not match")
						assert(res.body.approved === false, "loan IS approved")
						done()
					})
			})
			it("Should return the newly inserted object as NOT approved when the loan amount > 30% of income", done => {
				chai.request(server)
					.post('/api/loan')
					.send(loans.failIncome)
					.end((err, res) => {
						assert(!Boolean(err), "error was returned")
						assert(res.status === 200, "status not 200")
						assert(res.type === 'application/json', "return type is incorrect")
						assert(res.body.name === loans.failIncome.name, "Name does not match")
						assert(res.body.address === loans.failIncome.address, "Address does not match")
						assert(res.body.income === loans.failIncome.income, "Income does not match")
						assert(res.body.amount === loans.failIncome.amount, "Amount does not match")
						assert(res.body.approved === false, "loan IS approved")
						done()
					})
			})
			it("Should return an error if the posted object is invalid", done => {
				loans.pass.name = ""
				chai.request(server)
					.post('/api/loan')
					.send(loans.pass)
					.end((err, res) => {
						assert(!Boolean(err), "error was returned")
						assert(res.status === 200, "status is still 200")
						assert(res.type === 'application/json', "return type is incorrect")
						assert(res.body.name === "ValidationError")
						done()
					})
			})
		})
		describe("GET", () => {
			it("Should return a list of loans", done => {
				chai.request(server)
					.get('/api/loan')
					.send(loans.failIncome)
					.end((err, res) => {
						assert(!Boolean(err), "error was returned")
						assert(res.status === 200, "status is still 200")
						assert(res.type === 'application/json', "return type is incorrect")
						assert(Array.isArray(res.body), "body is not an array")
						assert(res.body.length, "body array is empty")
						assert.deepEqual(Object.keys(res.body[res.body.length - 1]), [
							"_id",
							"name",
							"address",
							"income",
							"amount",
							"approved",
							"createdAt",
							"updatedAt",
							"__v",
						])
						done()
					})
			})
		})
	})
})
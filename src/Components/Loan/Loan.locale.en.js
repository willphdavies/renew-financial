export default {
	form: {
		title: "Hi, please fill in the details below",
		submit: "Submit"
	},
	fields: {
		name: {
			label: "Name",
			error: "Name is required"
		},
		address: {
			label: "Mailing Address",
			error: "Mailing address is required"
		},
		income: {
			label: "Annual Income",
			error: {
				required: "Annual Income is required",
				number: "Annual Income should be a number"
			}
		},
		amount: {
			label: "Requested Loan Amount",
			error:  {
				required: "Requested Loan Amount is required",
				number: "Requested Loan Amount should be a number"
			}
		}
	},
	success: {
		title: "Success!",
		message: "Congratulations, you have been approved",
		button: "Submit a new Application"
	},
	fail: {
		title: "Loan Application declined",
		message: "We are sorry, your loan application has been declined",
		button: "Submit a new Application"
	}
}
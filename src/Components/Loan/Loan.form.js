import React from "react"
import { connect } from 'react-redux'
import i18n from "i18next"
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import { createLoan } from "./Loan.actions"

class LoanForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			fields: {
				name: "",
				address: "",
				income: "",
				amount: ""
			}
		}
		this.handleChange = this.handleChange.bind(this)
    	this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange = event => {
		if (event.target.name) {
			this.setState({
				fields: {
					...this.state.fields,
					[event.target.name]: event.target.value
				}
			})
		}
	}
	handleSubmit(event) {
		this.props.onAddLoan(this.state.fields)
		event.preventDefault()
	}
	render() {
		return (
			<ValidatorForm
							onSubmit={this.handleSubmit}
						>
							<h2>{i18n.t("loan.form.title")}</h2>
							<TextValidator
								className="field"
								name="name"
								label={i18n.t("loan.fields.name.label")}
								value={this.state.fields.name}
								margin="normal"
								variant="outlined"
								validators={['required']}
								errorMessages={[i18n.t("loan.fields.name.error")]}
								onChange={this.handleChange}
								/>
							<TextValidator
								className="field"
								name="address"
								label={i18n.t("loan.fields.address.label")}
								value={this.state.fields.address}
								margin="normal"
								variant="outlined"
								validators={['required']}
								errorMessages={[i18n.t("loan.fields.address.error")]}
								onChange={this.handleChange}
							/>
							<TextValidator
								className="field"
								name="income"
								label={i18n.t("loan.fields.income.label")}
								value={this.state.fields.income}
								margin="normal"
								variant="outlined"
								validators={['required', 'isNumber']}
								errorMessages={[
									i18n.t("loan.fields.income.error.required"), 
									i18n.t("loan.fields.income.error.number")
								]}
								onChange={this.handleChange}
								InputProps={{
									startAdornment: <InputAdornment position="start">$</InputAdornment>,
								  }}
							/>
							<TextValidator
								className="field"
								name="amount"
								label={i18n.t("loan.fields.amount.label")}
								value={this.state.fields.amount}
								margin="normal"
								variant="outlined"
								validators={['required', 'isNumber']}
								errorMessages={[
									i18n.t("loan.fields.amount.error.required"), 
									i18n.t("loan.fields.income.error.number")
								]}
								onChange={this.handleChange}
								InputProps={{
									startAdornment: <InputAdornment position="start">$</InputAdornment>,
								  }}
							/>
							<div className="row">
								<Button
									type="submit"
									variant="contained"
									color="primary"
									size="large">
									{i18n.t("loan.form.submit")}
								</Button>
							</div>
						</ValidatorForm>
		)
	}
}
const mapStateToProps = state => {
	return {
		...state.loans
	}
}
const mapDispatchToProps = dispatch => {
	return {
		onAddLoan: loan => {
			dispatch(createLoan(loan))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(LoanForm)
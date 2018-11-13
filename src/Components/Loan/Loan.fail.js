import React from "react"
import { connect } from 'react-redux'
import i18n from "i18next"
import Button from '@material-ui/core/Button'
import { resetApplication } from './Loan.actions'

class LoanFail extends React.Component {
	render() {
		return (
			<div className="loan-fail">
				<h2>{i18n.t("loan.fail.title")}</h2>
				<p>{i18n.t("loan.fail.message")}</p>
				<div className="button-container">
					<Button
						onClick={this.props.reset}
						variant="contained"
						color="primary"
						size="large"
					>{i18n.t("loan.fail.button")}</Button>
				</div>
			</div>
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
		reset: () => {
			dispatch(resetApplication())
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(LoanFail)
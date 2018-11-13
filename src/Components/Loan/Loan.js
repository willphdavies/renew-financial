import React from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import LoanForm from "./Loan.form"
import LoanSuccess from "./Loan.success"
import LoanFail from "./Loan.fail"
import "./Loan.scss"

class Loan extends React.Component {
	
	static propTypes = {
		items: PropTypes.array.isRequired,
		lastApplication: PropTypes.object.isRequired
	}
	shouldComponentUpdate(newProps) {
		return newProps.lastApplication._id !== this.props.lastApplication._id
	}
	render () {
		let content
		if(!Boolean(this.props.lastApplication._id)) {
			content = <LoanForm></LoanForm>
		} else if (this.props.lastApplication.approved) {
			content = <LoanSuccess></LoanSuccess>
		} else {
			content = <LoanFail></LoanFail>
		}
		return (
			<div className="loan">
				<Card>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="200"
						image="/img/renew-unsplash.jpg"
						title="Renew Financial Loan Application"
					/>
					<CardContent>
						{content}
					</CardContent>
				</Card>
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
	return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Loan)
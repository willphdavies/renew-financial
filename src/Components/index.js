import { LoanReducer, LoanLocalEn } from "./Loan"
import { merge } from 'lodash'

export { AppHeader, AppFooter } from "./Page"
export { Loan } from "./Loan"

export const reducer = LoanReducer
export const locale = {
	loan: LoanLocalEn
}
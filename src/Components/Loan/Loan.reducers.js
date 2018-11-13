import { combineReducers } from 'redux';
import { ADD_LOAN, FETCH_LOANS } from './Loan.actions';

function loanReducer(state = {
	items: [],
	lastApplication: {}
}, action) {
  	switch (action.type) {
    	case ADD_LOAN:
			return {
				...state,
				lastApplication: {
					...action.payload
				}
			};
		case FETCH_LOANS:
			return {
				...state,
				items: action.items
			};
    	default:
      		return state;
  }
}
export default combineReducers({
    loans: loanReducer
});
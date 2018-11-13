import { api } from '@/utils';

//types
export const ADD_LOAN = "ADD_LOAN"
export const FETCH_LOANS = "FETCH_LOANS"

const apiUrl = '/loan';

export const resetApplication = () => {
	return (dispatch) => {
		return dispatch({
			type: ADD_LOAN,
			payload: {}
		})
	}
}

export const createLoan = (postData) => {
	return (dispatch) => {
		return api.post(`${apiUrl}`, postData)
			.then(response => {
				return dispatch(createLoanSuccess(response.data))
			})
			.catch(error => {
				throw(error);
			});
		};
	};

export const createLoanSuccess =  (data) => {
  return {
    type: ADD_LOAN,
    payload: {
      _id: data._id,
      name: data.name,
	  address: data.address,
	  income: data.income,
	  amount: data.amount,
	  approved: data.approved
	}
  }
};

export const fetchLoans = (items) => {
  return {
    type: FETCH_LOANS,
    items
  }
};

export const fetchAllLoans = () => {
	return (dispatch) => {
		return api.get(apiUrl)
			.then(response => {
				return dispatch(fetchLoans(response.data))
			})
			.catch(error => {
				throw(error);
			});
	};
};
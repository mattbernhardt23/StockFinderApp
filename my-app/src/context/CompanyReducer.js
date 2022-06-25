const companyReducer = (state, action) => {
    switch(action.type) {
        case 'GET_COMPANIES':
            return {
                ...state,
                companies: action.payload,
                loading: false,
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'CLEAR_COMPANIES':
            return {
                ...state,
                companies: [],
            }
        case 'GET_COMPANY':
            return {
                ...state,
                company: action.payload,
                loading: false,
            }
        default: 
        return state
    }
}


export default companyReducer
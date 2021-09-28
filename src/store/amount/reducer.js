const initialState = {
    amount: 0,
};

export default (state = initialState, action) => {
    if(action.type === 'Deposit money'){
        return(
            {
                ...state,
                amount: state.amount + 10,
            }
        )
    }
    if(action.type === 'Withdraw money'){
        return(
            {
                ...state,
                amount: state.amount - 10,
            }
        )
    }

    return state;
}
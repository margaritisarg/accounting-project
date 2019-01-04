const initialReducer = {
    
    transactionInputs: [
        {id: 1, xParty: "statePaul", yAction: "Funds", zParty: "stateSandra", amount: 100},
        {id: 2, xParty: "stateEmily", yAction: "Loans", zParty: "stateJohn", amount: 200},
        {id: 3, xParty: "stateMatt", yAction: "Repays", zParty: "stateMicheal", amount: 300},
    ],
    emptyInputs: false,
    toggle: false
};

const reducer = (state = initialReducer, action) => {

    //FIGRE OUT HOW TO PASS VALUES FROM INPUT TO HERE
    console.log(state.transactionInputs);
    console.log(action.x);

    if(action.type === 'SUBMIT'){
        return{
             ...state.transactionInputs,
             transactionInputs: state.transactionInputs.concat(action.x)
        };
    }
    return state;
};

export default reducer;
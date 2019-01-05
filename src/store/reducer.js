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

    if(action.type === 'SUBMIT'){
        return{
             ...state.transactionInputs,
             transactionInputs: state.transactionInputs.concat(action.x)
        };
    }

    // if(action.type === 'DELETEITEM'){
    //     const newState = this.state.transactionInputs.filter(
    //         transInputs => transInputs.id !== action.selectedEntrysID);
	// 	this.setState({transactionInputs: newState})
    // }

    return state;
};

export default reducer;
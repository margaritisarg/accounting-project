const initialReducer = {
    
    transactionInputs: [
        {id: 1, xParty: "Paul", yAction: "Funds", zParty: "Sandra", amount: 100},
        {id: 2, xParty: "Emily", yAction: "Loans", zParty: "John", amount: 200},
        {id: 3, xParty: "Matt", yAction: "Repays", zParty: "Micheal", amount: 300},
    ],
    emptyInputs: false,
    toggle: false
};

const reducer = (state = initialReducer, action) => {

    if(action.type === 'SUBMIT'){

        if(action.x.xParty === null || action.x.zParty == null || 
            action.x.yAction == null || action.x.amount == null){
                return{
                    ...state,
                    emptyInputs: state.emptyInputs = true
                }
        }else{
            return{
                ...state.transactionInputs,
                transactionInputs: state.transactionInputs.concat(action.x),
                emptyInputs: state.emptyInputs = false,
                xParty: state.xParty = null,
                zParty: state.zParty = null,
                yAction: state.yAction = null,
                amount: state.amount = null
            }
        }
    };

    if(action.type === 'DELETEITEM'){
        return{
            ...state.transactionInputs,
            transactionInputs : state.transactionInputs.filter(transInputs => transInputs.id !== action.selectedEntrysID)
        }      
    }

    return state;
};

export default reducer;
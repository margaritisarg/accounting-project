import axios from '../axios-transactions';

const initialReducer = {
    
    transactionInputs: [],
    emptyInputs: false,
    loading: false
};

const reducer = (state = initialReducer, action) => {

    if(action.type === 'SETUP'){
     //   console.log(action.setupData)
        return{
            ...state.transactionInputs,
            transactionInputs: state.transactionInputs.concat(action.setupData),        
        }
    }

    if(action.type === 'SUBMIT'){

        if(action.x.xParty == null || action.x.zParty == null || 
            action.x.yAction == null || action.x.amount == null ||
            action.x.xParty === '' || action.x.zParty === '' || 
            action.x.yAction === '' || action.x.amount === ''){

                return{
                    ...state,
                    emptyInputs: state.emptyInputs = true,
                    loading: state.emptyInputs = true
                }
        }else{
            const stateTransactionInputsToFireBase = action.x

            console.log('BEFORE FIREBASE')
            console.log(stateTransactionInputsToFireBase)
            console.log('AFTER FIREBASE')
            console.log(state)

            axios.post('/initialTrans.json', stateTransactionInputsToFireBase)
                .then(response => console.log('Success'))
                .catch(error => console.log(error));

            return{
                ...state.transactionInputs,
                transactionInputs: state.transactionInputs.concat(action.x),
                emptyInputs: state.emptyInputs = false,
                loading: state.loading = false,
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
            transactionInputs : state.transactionInputs.filter(transInputs => 
                transInputs.id !== action.selectedEntrysID)
        }      
    }

    return state;
};

export default reducer;
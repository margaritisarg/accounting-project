import axios from '../axios-transactions';
import * as actionTypes from '../store/actions/actions';

const initialReducer = {   
    transactionInputs: [],
    emptyInputs: false,
    loading: false
};

const reducer = (state = initialReducer, action) => {

    //Setup
    if(action.type === actionTypes.SETUP){
        return{
            ...state.transactionInputs,
            transactionInputs: state.transactionInputs.concat(action.setupData),       

        }
    }

    //Submit results
    if(action.type === actionTypes.SUBMITRESULTS){

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

    //Delete record
    if(action.type === actionTypes.DELETEITEM){

        //console.log(action.wholeData)

        axios.delete('/initialTrans/' + action.selectedEntrysID + '.json', {
            data: {id: action.wholeData.id}
            }).then(response => console.log(response))
            .catch(error => console.log(error));

        return{
            ...state.transactionInputs,
            transactionInputs : state.transactionInputs.filter(transInputs => 
                transInputs.id !== action.wholeData.id)

        }      
    }
    return state;
};

export default reducer;
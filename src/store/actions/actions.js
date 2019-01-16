export const SUBMITRESULTS = 'SUBMITRESULTS';
export const DELETEITEM = 'DELETEITEM';
export const SETUP = 'SETUP';

export const setup = (data) => { 
    return{
        type: SETUP,
        setupData: data
    };   
};


export const saveDeleteItem = (selectedEntrysID, wholeData) =>{ 
    console.log('herere')
    return{
        type: DELETEITEM,
        selectedEntrysID: selectedEntrysID,
        wholeData: wholeData
    };
}

export const deleteItem = (selectedEntrysID, wholeData) => {
    return dispatch => {

        console.log('selectentrID', selectedEntrysID)
        console.log('wholeData', wholeData)

       // dispatch(setup(wholeData));

        setTimeout( () => {
            dispatch(saveDeleteItem(selectedEntrysID, wholeData))
        }, 3000);    
    }
};

export const submitResults = (x, loading) => {
    return{
        type: SUBMITRESULTS,
        x: x,
        loading: loading
    };
};


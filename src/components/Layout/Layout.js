import React from 'react';
import Aux from '../../hoc/Aux';
import Transactions from '../../containers/Transactions';

const layout = (props) => {
    return(
        <Aux>      
            <Transactions/>
        </Aux>

    );
};

export default layout;
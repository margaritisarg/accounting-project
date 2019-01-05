import React from 'react';
import classes from './Inputs.css';

const inputs = (props) => { 
  return(
    <div >
        <p className={classes.InputLayout} onClick={props.deleteItem}>
           {props.xParty} {props.yAction} {props.zParty} - £{props.amount}</p>
    </div>
  );   
};

export default inputs;
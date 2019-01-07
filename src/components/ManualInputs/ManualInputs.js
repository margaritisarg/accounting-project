import React from 'react';
import classes from './ManualInputs.css'

const manualInputs = (props) => {
  
  return(
    <div>
        <input
          onChange={e => props.handleChangeXParty(e.target.value)}
          className={classes.xInput}
          placeholder='X Name'
          type='text'
			  />

      <input
          onChange={e => props.handleChangeZParty(e.target.value)}
          className={classes.zInput}
          placeholder='Z Name'
          type='text'
        />

      <input
          onChange={e => props.handleChangeyAction(e.target.value)}
          className={classes.yInput}
          placeholder='Y action'
          type='text'
        />

          <input
          onChange={e => props.handleChangeAmount(e.target.value)}
          className={classes.amountInput}
          placeholder='Enter amount'
          type='text'
        />

        <button className={classes.buttonSubmit} onClick={props.submitResults}>Submit</button>
        
    </div>

  );   
};

export default manualInputs;
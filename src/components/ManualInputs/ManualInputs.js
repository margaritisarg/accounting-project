import React from 'react';
import classes from './ManualInputs.css'

const manualInputs = (props) => {
  
  return(
    <div>
        <input
          //value={props.xPartyinputValue}
          onChange={e => props.handleChangeXParty(e.target.value)}
          className={classes.xInput}
          placeholder='X Name'
          type='text'
			  />

      <input
          //value={props.zPartyinputValue}
          onChange={e => props.handleChangeZParty(e.target.value)}
          className={classes.zInput}
          placeholder='Z Name'
          type='text'
        />

      <input
          //value={props.zPartyinputValue}
          onChange={e => props.handleChangeyAction(e.target.value)}
          className={classes.yInput}
          placeholder='Y action'
          type='text'
        />

          <input
          //value={props.zPartyinputValue}
          onChange={e => props.handleChangeAmount(e.target.value)}
          className={classes.amountInput}
          placeholder='Enter amount'
          type='text'
        />

        <button className={classes.Button} onClick={props.addEntry}>Submit</button>
        
        {//<button className={classes.Button} onClick={props.submitResults}>Submit</button>
        }
    </div>
  );   
};

export default manualInputs;
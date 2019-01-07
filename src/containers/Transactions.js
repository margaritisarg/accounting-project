import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import Inputs from '../components/Inputs/Inputs';
import ManualInputs from '../components/ManualInputs/ManualInputs';
import classes from './Transaction.css';
import { connect } from 'react-redux';
//import axios from 'axios';
import Spinner from '../components/UI/Spinner/Spinner';

class Transactions extends Component{

    state = {
	};

	// componentDidMount(){
	// 	axios.get('/posts')
	// 		.then(response => {
	// 			console.log(response);
	// 		})
	// 		.catch(error => {
	// 			console.log(error);
	// 		});
	// }

	handleChangeXParty = value => {
		this.setState({ ...this.state, xPartyinputValue: value });
	};

    handleChangeZParty = value => {
		this.setState({ ...this.state, zPartyinputValue: value });
	};

	handleChangeyAction = value => {
		this.setState({ ...this.state, yActioninputvalue: value });
	};

	handleChangeAmount = value => {
		this.setState({ ...this.state, amountinputvalue: value });
	};


	// addEntry = () => {
    //     const xPartyInput = this.state.xPartyinputValue;
    //     const zPartyInput = this.state.zPartyinputValue;
	// 	const yActioninput = this.state.yActioninputvalue;
	// 	const amountinput = this.state.amountinputvalue;
		
	// 	if(yActioninput === null || zPartyInput == null || xPartyInput == null || amountinput == null ||
	// 		yActioninput === '' || zPartyInput === '' || xPartyInput === '' || amountinput === ''){

	// 		this.setState({emptyInputs: true});
			
	// 	}else{
	// 		const newTransactionInput = {
	// 			id: Math.random(),
	// 			xParty: xPartyInput,
	// 			yAction: yActioninput,
	// 			zParty: zPartyInput,
	// 			amount: amountinput
	// 		};
	// 		this.setState({
	// 			...this.state,
	// 			transactionInputs: [...this.state.transactionInputs, newTransactionInput],
	// 			xPartyinput: null,
	// 			zPartyinput: null,
	// 			yActioninput: null,
	// 			amountinput: null
	// 		});
	// 		this.setState({emptyInputs: false});
	// 		console.log(this.state.transactionInputs);
	// 	}
	// };

	// deleteItem = selectedEntrysID => {
	// 	const newState = this.state.transactionInputs.filter(transInputs => transInputs.id !== selectedEntrysID);
	// 	this.setState({transactionInputs: newState})
	// }

    render(){		
		let emptyBoxes = this.props.transInput.emptyInputs ? <p className={classes.errorMessage}>Waiting for a valid input</p>
											: false
		
		let spinnerStyle = null;
		if(this.props.transInput.loading){
			spinnerStyle = <Spinner/>
		}
		
		return(
            <Aux>
                <h1 className={classes.h1}>Transaction page</h1>

				<div className={classes.resultborder}>
					{this.props.transInput.transactionInputs.map(data => {
						return (
							<Inputs
								key={data.id}
								xParty={data.xParty}
								zParty={data.zParty}
								yAction={data.yAction}
								amount={data.amount}
								deleteItem={() => this.props.deleteItem(data.id)}/>
						);
					})}
				</div>

				{spinnerStyle}
				{emptyBoxes}

				<ManualInputs
					submitResults={() => this.props.submitResults(this.state.xPartyinputValue, 
							this.state.zPartyinputValue,
							this.state.yActioninputvalue,
							this.state.amountinputvalue)}

					xPartyinputValue={this.state.xPartyinputValue}
					zPartyinputValue={this.state.zPartyinputValue}
					yActioninputValue={this.state.yAction}

					handleChangeAmount = {this.handleChangeAmount}
					handleChangeXParty={this.handleChangeXParty}
					handleChangeZParty={this.handleChangeZParty}
					handleChangeyAction={this.handleChangeyAction}
				/>
			</Aux>       
			
        );
    }
}

const mapStateToProps = state => {
	return {
		transInput: state
	};
};

const mapDispatchToProps = dispatch => {

    return {
        submitResults: (xParty, zParty, yAction, amount) => dispatch({type: 'SUBMIT', x: {
            id: Math.random(),
            xParty: xParty,
            yAction: yAction,
            zParty: zParty,
			amount: amount
		},
		loading: true
		}),
		
		deleteItem: (selectedEntrysID) => dispatch({type: 'DELETEITEM', 
		selectedEntrysID: selectedEntrysID
		})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
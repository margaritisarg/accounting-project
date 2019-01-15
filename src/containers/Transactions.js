import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import Inputs from '../components/Inputs/Inputs';
import ManualInputs from '../components/ManualInputs/ManualInputs';
import classes from './Transaction.css';
import { connect } from 'react-redux';
import Spinner from '../components/UI/Spinner/Spinner';
import axios from '../axios-transactions';

class Transactions extends Component{

    state = {
		transactionInputs: [],
		emptyInputs: false,
		loading: false
	};

	componentWillMount(){
		this.setupStates();
	}

	setupStates = () => {
		axios.get('initialTrans.json')
		.then(response => {

			this.setState({transactionInputs: null});

			const objectKeys = Object.keys(response.data)
			const objectValues = Object.values(response.data)

			const result = objectValues.map((value, index) => ({
				...value,
				objectKey: objectKeys[index]
			}));

			this.setState({transactionInputs: result.filter( record =>
				record != null ),
			});			

			this.props.setupAll(this.state.transactionInputs);
		}).catch(error => console.log(error));
	};

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

		let displayRecords = <Spinner/>
		
		if(this.props.transInput){
			displayRecords = (	
				<div className={classes.resultborder}>
					{this.props.transInput.transactionInputs.map(data => 
						{
							return (
								<Inputs
									key={data.id}
									xParty={data.xParty}
									zParty={data.zParty}
									yAction={data.yAction}
									amount={data.amount}
									deleteItem={() => this.props.deleteItem(data.objectKey, data)}/>
							);
						}
					)}
				</div>
			)}

			
		return(
            <Aux>
                <h1 className={classes.h1}>Transaction page</h1>

				{displayRecords}
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
		
		deleteItem: (selectedEntrysID, wholeData) => dispatch({type: 'DELETEITEM', 
		selectedEntrysID: selectedEntrysID,
		wholeData: wholeData
		}),
	
		setupAll: (data) => dispatch({type: 'SETUP', setupData: data})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);








		//SOME HOW ENTRIES WILL BE HOW YOU MERGE THE 2
		
		
		/*
			first we get an object, convery to an array, append new array 
			value and convert it back to an object. In the case below we are 
			just getting the the first array element in our object and using 
			that.
			
			some good refences here: 
			https://googlechrome.github.io/samples/object-assign-es6/
			
		*/
		/*
				const object1 = { foo: 'bar', baz: 42 };
				console.log('[object1] our intial object = ',object1)

				const result = Object.entries(object1);
				//console.log(result[0][0]);
				console.log('[result] object.entries to array now = ' , result)

				let firstObject = result[0]
				console.log('[firstObject] first entry object in array we getting: ',firstObject)

				let keyName = result[0][0] + '2a';
				let valueName = result[0][1] + '2b';
				//console.log(keyName , valueName)

				result.push(firstObject);
				console.log('[result] pushed result = ',result);

				console.log('-------------------------------------------')
				console.log('below is assigned array back to object')
				let finalObject = Object.assign({}, result);
				console.log(finalObject);
		*/
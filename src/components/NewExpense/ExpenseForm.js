import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) =>{
    // const [enteredTitle, setEnteredTitle ]=useState('');
    // const [enteredAmount, setEnteredAmount ]=useState('');
    // const [enteredDate, setEnteredDate ]=useState('');
    //use one state instead of 3
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });
    const titleChangeHandler = (event) =>{
        //setEnteredTitle(event.target.value);
       //react replaces the old state with new one
       //so you need to give all values
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        //as react schedules state updates so
        setUserInput((prevState)=>{
            return {...prevState, enteredTitle:event.target.value};
        });
    };
    const amountChangeHandler = (event) =>{
       // setEnteredAmount(event.target.value);
       setUserInput({
        ...userInput,
        enteredAmount: event.target.value,
    });
    };
    const dateChangeHandler = (event) =>{
      //  setEnteredDate(event.target.value);
      setUserInput({
        ...userInput,
        enteredDate: event.target.value,
    });
    };
    const submitHandler = (event) =>{
        //to stop the page from reloading
        event.preventDefault();

        const expenseData={
            title:userInput.enteredTitle,
            amount:userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };
       // console.log(expenseData);
       props.onSaveExpenseData(expenseData);
        //two-way binding -> changing data of input fields by adding value keyword
        setUserInput({
            enteredTitle:'',
            enteredAmount:'',
            enteredDate:''
        });
    };
    //we can create event props for our child to pass data to parent
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={userInput.enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>          
        </div>
        <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;
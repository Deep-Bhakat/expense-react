import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) =>{
//we can create event props for our child to pass data to parent
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onNewExpense(expenseData);
        console.log(expenseData);
    };
    const [isAdding,setIsAdding]=useState(false);

    const startAddingHandler = () =>{
        setIsAdding(true);
    }; 
    const stopAddingHandler = () =>{
        setIsAdding(false);
    };
    return (
        <div className="new-expense">
            {!isAdding && <button onClick={startAddingHandler}>Add New Expense</button>}
           {isAdding && <ExpenseForm 
           onSaveExpenseData={saveExpenseDataHandler}
           onCancel={stopAddingHandler} />
}
        </div>
    )
};

export default NewExpense;
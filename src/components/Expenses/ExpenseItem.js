import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
// import { useState } from 'react';
function ExpenseItem(props) { 
    //changing state
    //useState requires a default state variable
    //it returns an array
    // const [title,setTitle] = useState(props.title);   
    // const clickHandler =() =>{
    //     setTitle('Updated');            
    // };
    return (
        <li>
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
        </li>
    );
}
//there should be only one root in the return statement

export default ExpenseItem;
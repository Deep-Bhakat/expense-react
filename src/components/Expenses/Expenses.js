import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
function Expenses(props){
      const [selectedYear, setUpdatedYear]=useState('2020');
    const filterChangeHandler = selectedYear =>{
      setUpdatedYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense =>{
      return expense.date.getFullYear().toString() === selectedYear;
    });
    // let expensesContent = <p>No Expenses Found</p>;

    // if(props.items.length > 0){
    //   expensesContent = props.items.map((item)=>(
    //      <ExpenseItem 
    //     key={item.id}
    //     title={item.title} 
    //     amount={item.amount}          
    //     date={item.date}/>
    //   ));
    // }
      return (
        <Card className="expenses">
          <ExpenseFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses}/>
          
          {/* using conditions outside jsx code */}
          {/* {expensesContent} */}
         
          {/* an alternative of ternary expression is to use && which is a js trick which returns the second part of the condition */}
          {/* {filteredExpenses.length === 0 &&  <p>No Expenses Found</p> }
          {filteredExpenses.length > 0 && filteredExpenses.map((item)=>{
            return <ExpenseItem 
            key={item.id}
            title={item.title} 
            amount={item.amount}          
            date={item.date}/>
             }) } */}
          {/* using ternary */}
          {/* { filteredExpenses.length === 0 ? 
          <p>No Expenses Found</p> 
          : filteredExpenses.map((item)=>{
            return <ExpenseItem 
            key={item.id}
            title={item.title} 
            amount={item.amount}          
            date={item.date}/>
             })} */}
          
    
        </Card>
      );
}
export default Expenses;
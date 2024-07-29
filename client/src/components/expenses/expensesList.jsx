import { useState } from "react";
import useGetAll from "../../hooks/useGetAll";
import ExpenseCard from "./expensesCard";
const ExpenseList = () => {
    const { isLoading, isError, expenses } = useGetAll();

    return (
        <div>
            {expenses.map((expense) => (
                <div key={expense._id}>
                    <ExpenseCard expense={expense}/>
                </div>
        ))}
      </div>  
    );
}

export default ExpenseList;
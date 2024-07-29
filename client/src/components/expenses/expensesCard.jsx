import { useState } from "react";
import { EditButton,DeleteButton } from "../buttons";
const ExpenseCard = ({ expense }) => {
    return (
        <div>
            <p>{expense.name}</p>
            <p>{expense.amount}</p>
            <EditButton />
            <DeleteButton/>
        </div>
    )
}

export default ExpenseCard;
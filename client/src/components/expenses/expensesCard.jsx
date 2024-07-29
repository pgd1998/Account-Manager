import { useState } from "react";
import { EditButton, DeleteButton } from "../buttons";
import useDelete from "../../hooks/useDelete";

const ExpenseCard = ({ expense }) => {
    const { isLoading, isError, handleDelete } = useDelete();

    const OnClickEdit = async () => {
        handleDelete(expense._id);
    }
    return (
        <div>
            <p>{expense.name}</p>
            <p>{expense.amount}</p>
            <EditButton />
            <DeleteButton disabled={ isLoading} onClick={ OnClickEdit} />
        </div>
    )
}

export default ExpenseCard;
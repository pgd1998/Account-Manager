import { useState } from "react";
import { EditButton, DeleteButton, SaveButton,CancelButton } from "../buttons";
import useDelete from "../../hooks/useDelete";
import useEdit from "../../hooks/useEdit";
const ExpenseCard = ({ expense }) => {
    const { isLoading, isError, handleDelete } = useDelete();
    const { isLoading:editLoading,isError:editError,handleEdit } = useEdit();
    const [isEditing, setIsEditing] = useState(false);
    const [editedExpense, setEditedExpense] = useState({ ...expense });

    const OnClickdelete = async () => {
        handleDelete(expense._id);
    }

    const onClickEdit = () => {
        setIsEditing(!isEditing);
    }

    const OnChange = (e) => {
        const { name, value } = e.target;
        setEditedExpense((prev)=>({...prev,[name]:value}))
    }
    
    const OnSubmit = async (e) => {
        e.preventDefault();
        await handleEdit({ expenseId: expense._id, updatedData: editedExpense });
        setIsEditing(false);
    }

    return (
        <div>
            {
                isEditing ? (<form onSubmit={OnSubmit}>
                    <input type="text" name="name" value={editedExpense.name} onChange={OnChange} />
                    <input type="number" name="amount" value={editedExpense.amount} onChange={OnChange} />
                    <SaveButton disabled={editLoading} />
                    <CancelButton onClick={onClickEdit}/>
                    
                </form>)
                    :
                    (
                        <>
                <p>{expense.name}</p>
                <p>{expense.amount}</p>
                            <EditButton onClick={ onClickEdit} />
                            <DeleteButton disabled={isLoading} onClick={OnClickdelete} />
                            </>
            )}
        </div>
    )
}

export default ExpenseCard;
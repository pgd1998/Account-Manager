import { useState } from "react";
import editApi from "../utils/editExpenseApi";
import { useSelector,useDispatch } from "react-redux";
const useEdit = () => {
    const dispatch = useDispatch();
    const isLoading=useSelector((state)=>state.expense.editStatus==='loading')
    const isError = useSelector((state) => state.expense.editError)

    const handleEdit = async ({ expenseId, updatedData }) => {
        
       
            dispatch(editApi(expenseId, updatedData));
           
    };
    return {isLoading,isError, handleEdit };
}

export default useEdit;
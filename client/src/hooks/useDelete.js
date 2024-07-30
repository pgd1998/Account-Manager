import { useState } from "react";
import deleteApi from "../utils/deleteExpenseApi";
import { useDispatch,useSelector } from "react-redux";

const useDelete = () => {
    const dispatch = useDispatch();
    const isLoading=useSelector((state)=>state.expense.deleteStatus==='loading')
    const isError=useSelector((state)=>state.expense.deleteError)


    const handleDelete = async (expenseId) => {
        
        dispatch( deleteApi(expenseId));
            
    }
    return {isLoading,isError,handleDelete}
}

export default useDelete;
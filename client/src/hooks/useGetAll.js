import React, { useEffect, useState } from "react";
import getAllApi from "../utils/getAllExpensesApi";
import { useDispatch,useSelector } from "react-redux";

const useGetAll = () => {
    const dispatch = useDispatch();
    const isLoading=useSelector((state)=>state.expense.getAllStatus==='loading')
    const isError=useSelector((state)=>state.expense.getAllError)
    const expenses = useSelector((state)=>state.expense.items);
    const editStatus = useSelector((state) => state.expense.editStatus);
    const deleteStatus = useSelector((state) => state.expense.deleteStatus);
    const createStatus = useSelector((state) => state.expense.createStatus);

    
    useEffect(() => {
         dispatch( getAllApi());
    },[dispatch,editStatus,deleteStatus,createStatus])
    return { isLoading, isError, expenses };
}

export default useGetAll;
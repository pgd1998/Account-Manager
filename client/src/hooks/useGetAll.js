import React, { useEffect, useState } from "react";
import getAllApi from "../utils/getAllExpensesApi";
const useGetAll = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    const [expenses, setIsExpenses] = useState([]);

    const handleGetAll = async () => {
        setIsLoading(true);
        setIsError(null);
        try {
            const response = await getAllApi();
            setIsExpenses(response);
        } catch (error) {
            throw new Error(error.message || 'hook error');
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        handleGetAll();
    },[])
    return { isLoading, isError, expenses };
}

export default useGetAll;
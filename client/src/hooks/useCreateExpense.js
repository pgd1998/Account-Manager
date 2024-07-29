import { useEffect, useState } from "react";
import createApi from "../utils/createExpenseApi";

const useCreate = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    const handleCreate = async (expenseData) => {
        setIsLoading(true);
        setIsError(null)
        try {
            const response = await createApi(expenseData);
            
            // const result=await response.json();
            return response;
        } catch (error) {
            setIsError(error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }
    return { isLoading, isError, handleCreate };
}

export default useCreate;
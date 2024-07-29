import { useState } from "react";
import deleteApi from "../utils/deleteExpenseApi";

const useDelete = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    const handleDelete = async (expenseId) => {
        setIsLoading(true);
        setIsError(null);
        try {
            const response = await deleteApi(expenseId);
            return response;
        } catch (error) {
            setIsError(error.message || 'Error in delete API hook');
            throw error;
        } finally {
            setIsLoading(false);
        }
    }
    return {isLoading,isError,handleDelete}
}

export default useDelete;
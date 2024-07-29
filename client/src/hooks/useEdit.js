import { useState } from "react";
import editApi from "../utils/editExpenseApi";

const useEdit = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    const [expense, setExpense] = useState();

    const handleEdit = async ({ expenseId, updatedData }) => {
        setIsLoading(true);
        setIsError(null);
        try {
            const result = await editApi(expenseId, updatedData);
            setExpense(result);
            console.log("in edit hook",result)
            return result;
        } catch (error) {
            setIsError(error.message || 'Error in edit API hook');
            throw error;
        } finally {
            setIsLoading(false);
        }
    };
    return {isLoading,isError, handleEdit };
}

export default useEdit;
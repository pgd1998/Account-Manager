// import { useEffect, useState } from "react";
// import createApi from "../utils/createExpenseApi";

// const useCreate = () => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [isError, setIsError] = useState(null);

//     const handleCreate = async (expenseData) => {
//         setIsLoading(true);
//         setIsError(null)
//         try {
//             const response = await createApi(expenseData);
            
//             // const result=await response.json();
//             return response;
//         } catch (error) {
//             setIsError(error);
//             throw error;
//         } finally {
//             setIsLoading(false);
//         }
//     }
//     return { isLoading, isError, handleCreate };
// }

// export default useCreate;

import { useEffect, useState } from "react";
import createApi from "../utils/createExpenseApi";
import { useDispatch, useSelector } from "react-redux";

const useCreate = () => {
    const dispatch = useDispatch();
    const isLoading=useSelector((state)=>state.expense.createStatus==='loading')
    const isError=useSelector((state)=>state.expense.createError)

    const handleCreate = async (expenseData) => {
        dispatch( createApi(expenseData));
    }
    return { isLoading, isError, handleCreate };
}

export default useCreate;
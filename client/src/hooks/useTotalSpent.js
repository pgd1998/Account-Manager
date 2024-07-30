import { useEffect } from "react";
import totalSpentApi from "../utils/getTotalSpentApi";
import { useSelector,useDispatch } from "react-redux";
const useTotalSpent =  () => {
    const dispatch = useDispatch();
    const isLoading=useSelector((state)=>state.expense.getAllStatus==='loading')
    const isError=useSelector((state)=>state.expense.getAllError)
    const spent = useSelector((state)=>state.expense.spent);
    useEffect(() => {
        const handleTotalSpent = async () => {
        dispatch( totalSpentApi());
            
        }
        handleTotalSpent();
    },[dispatch])
    
    return spent;
}

export default useTotalSpent;
import { useEffect, useState } from "react";
import totalSpentApi from "../utils/getTotalSpentApi";

const useTotalSpent =  () => {
    const [isSpent, setIsSpent] = useState(0);
    useEffect(() => {
        const handleTotalSpent = async () => {
        try {
            const result = await totalSpentApi();
            console.log('spent',result)
            setIsSpent(result);
        } catch (error) {
            throw error;

        }
        }
        handleTotalSpent();
    },[])
    
    return isSpent;
}

export default useTotalSpent;
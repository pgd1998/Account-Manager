import totalAmountApi from "../utils/getTotalAmountApi";

const useTotalAmount =  () => {
    
    const handleTotalAmount = async () => {
        try {
            const result = await totalAmountApi();
            return result;
        } catch (error) {
            throw error
        }
    }
    return {handleTotalAmount};
}

export default useTotalAmount;
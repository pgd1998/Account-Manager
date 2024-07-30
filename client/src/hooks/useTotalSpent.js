import totalSpentApi from "../utils/getTotalSpentApi";

const useTotalSpent =  () => {

    const handleTotalSpent = async () => {
        try {
            const result = await totalSpentApi();
            console.log('spent',result)
            return result;
        } catch (error) {
            throw error;

        }
    }
    return handleTotalSpent;
}

export default useTotalSpent;
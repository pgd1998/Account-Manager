const totalAmountApi = async () => {
    try {
        const response = await fetch('/api/expenses/total/amount', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log("total amount",result)
        return result.totalAmount;
    } catch (error) {
        throw new Error(error||"in get total amount api")
    }
}

export default totalAmountApi;
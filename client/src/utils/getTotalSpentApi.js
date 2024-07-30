const totalSpentApi = async () => {
    try {
        const response = await fetch('/api/expenses/total/spent', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log("total spent", result);
        return result.totalSpent;
    } catch (error) {
           throw new Error(error||"in get total spent api")

    }
}

export default totalSpentApi;
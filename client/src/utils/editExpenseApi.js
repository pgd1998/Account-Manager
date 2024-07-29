const editApi = async (expenseId,updatedData) => {
    try {
        const response = await fetch(`/api/expenses/${expenseId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        const result=await response.json();
        return result;
    } catch (error) {
        throw new Error(error.message || 'Edit api error');
    }
}

export default editApi;
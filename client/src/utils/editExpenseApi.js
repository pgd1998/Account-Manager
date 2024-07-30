const editApi = async (expenseId,updatedData) => {
    try {
        const response = await fetch(`/api/expenses/${expenseId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Unable to edit");
        }
        const result = await response.json();
        console.log("edit api", result);
        return result;
    } catch (error) {
        throw new Error(error.message || 'Edit api error');
    }
}

export default editApi;
const deleteApi = async (expenseId) => {
    try {
        const response = await fetch(`/api/expenses/${expenseId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Expense not deleted");
        }
        return response;
    } catch (error) {
        throw new Error(error.message || 'Delete api error');

    }
}

export default deleteApi;
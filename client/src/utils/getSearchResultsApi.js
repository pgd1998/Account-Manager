const searchResultsApi = async (searchTerm) => {
    try {
        const result = await fetch(`/api/expenses/search?term=${encodeURIComponent(searchTerm)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!result.ok) {
            const errorResponse = await result.json();
            console.log(errorResponse.message)
            console.error(errorResponse);
            throw new Error(errorResponse.message || 'Something went wrong');

        }
        const response = await result.json();
        return response;
    } catch (error) {
        
    }
}

export default searchResultsApi;
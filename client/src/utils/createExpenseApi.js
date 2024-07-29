import React from "react";

const createApi = async (expenseData) => {
    try {
        
        const response = await fetch('/api/expenses', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(expenseData)
        });
                console.log('Response:', response); // Log the response object

        if (!response.ok) {
                        const errorData = await response.json(); // Await the error response

            throw new Error('Expense not added. Check the network');
        }
        const result = await response.json();
        return result;

    } catch (error) {
                console.error('There was a problem with fetch ops', error); // Log the original error

        throw new Error('There was a problem with fetch ops', error);
    }
}

export default createApi;
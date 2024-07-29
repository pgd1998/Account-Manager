import React from "react";

const getAllApi = async () => {
    try {
        const response = await fetch('/api/expenses', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = response.json();
        return result;
    } catch (error) {
        throw new Error(error || 'Unable to get the expenses!');
    }
}

export default getAllApi;
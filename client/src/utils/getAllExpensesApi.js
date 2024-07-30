import React from "react";

const getAllApi = async () => {
    try {
        const response = await fetch('/api/expenses', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message||"Server error")
        }
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error(error || 'Unable to get the expenses!');
    }
}

export default getAllApi;
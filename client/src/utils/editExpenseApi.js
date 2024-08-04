import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "./config";
const editApi = createAsyncThunk('expenses/edit',
    async (expenseId, updatedData,{rejectWithValue}) => {
    try {
        const response = await fetch(`${config.apiBaseUrl}/expenses/${encodeURIComponent(expenseId)}`, {
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
        return rejectWithValue(error.message || 'Edit api error');
    }
})

export default editApi;
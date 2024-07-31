import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "./config";

const deleteApi = createAsyncThunk('expenses/delete',
    async (expenseId,{rejectWithValue}) => {
    try {
        const response = await fetch(`${config.apiBaseUrl}/expenses/${expenseId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Expense not deleted");
        }
        return expenseId;
    } catch (error) {
        return rejectWithValue(error.message || 'Delete api error');

    }
});

export default deleteApi;
import React from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";


const getAllApi =createAsyncThunk('expenses/getAll',
    async (_,{rejectWithValue}) => {
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
        return rejectWithValue(error || 'Unable to get the expenses!');
    }
})

export default getAllApi;
import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "./config";

const totalSpentApi = createAsyncThunk('expenses/spent',
    async (_,{rejectWithValue}) => {
        try {
            const response = await fetch(`${config.apiBaseUrl}/expenses/total/spent`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            console.log("total spent", result);
            return result.totalSpent;
        } catch (error) {
            return rejectWithValue(error || "in get total spent api")

        }
    });

export default totalSpentApi;
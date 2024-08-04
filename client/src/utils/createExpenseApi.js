// import React from "react";

// const createApi = async (expenseData) => {
//     try {
        
//         const response = await fetch('/api/expenses', {
//             method: 'POST',
//             headers: {
//                 'Content-Type':'application/json'
//             },
//             body: JSON.stringify(expenseData)
//         });
//         if (!response.ok) {
//             const errorData = await response.json(); 
//             throw new Error(errorData.message||'Expense not added. Check the network');
//         }
//         const result = await response.json();
//         return result;

//     } catch (error) {
//         console.error('There was a problem with fetch ops', error); 
//         throw new Error('There was a problem with fetch ops', error);
//     }
// }

// export default createApi;


import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "./config"; 
    
const createApi = createAsyncThunk('expenses/create',
    async (expenseData,{rejectWithValue}) => {
    try {
        
        const response = await fetch(`${config.apiBaseUrl}/expenses`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(expenseData)
        });
        if (!response.ok) {
            const errorData = await response.json(); 
            throw new Error(errorData.message||'Expense not added. Check the network');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('There was a problem with creating expense', error); 
        return rejectWithValue('There was a problem with creating expense', error);
    }
})

export default createApi;
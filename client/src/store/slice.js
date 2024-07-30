import { createApi, getAllApi, editApi, deleteApi, totalSpentApi } from '../utils';
import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
    name: "expense",
    initialState: {
        items: [],
        createStatus: 'idle',
        editStatus: 'idle',
        deleteStatus: 'idle',
        spentStatus: 'idle',
        createError: null,
        editError: null,
        deleteError: null,
        spentError:null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(createApi.pending, (state) => {
                state.createStatus = 'loading';
            })
            .addCase(createApi.fulfilled, (state, action) => {
                state.createStatus = 'fulfilled';
                    state.items = action.payload;
            })
            .addCase(createApi.rejected, (state, action) => {
                state.createStatus = 'failed';
                state.createError = action.payload;
            })
            .addCase(editApi.pending, (state) => {
                state.editStatus = 'loading';
            })
            .addCase(editApi.fulfilled, (state, action) => {
                state.editStatus = 'fulfilled';
                state.items = action.payload;
            })
            .addCase(editApi.rejected, (state, action) => {
                state.editStatus = 'loading';
                state.editError = action.payload;
            })
            .addCase(deleteApi.pending, (state) => {
                state.deleteStatus = 'loading';
            })
            .addCase(deleteApi.fulfilled, (state, action) => {
                state.deleteStatus = 'fulfilled';
                state.action = action.payload;
            })
            .addCase(deleteApi.rejected, (state, action) => {
                state.deleteStatus = 'rejected';
                state.deleteError = action.payload;
        })
    }
})

export const { reducer } = expenseSlice;
export default reducer;

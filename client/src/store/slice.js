import { createApi, getAllApi, editApi, deleteApi, totalSpentApi } from '../utils';
import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
    name: "expense",
    initialState: {
        items: [],
        spent:0,
        getAllStatus:'idle',
        createStatus: 'idle',
        editStatus: 'idle',
        deleteStatus: 'idle',
        spentStatus: 'idle',
        createError: null,
        editError: null,
        deleteError: null,
        spentError: null,
        getAllError:null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(createApi.pending, (state) => {
                state.createStatus = 'loading';
            })
            .addCase(createApi.fulfilled, (state, action) => {
                state.createStatus = 'fulfilled';
                    state.items.push(action.payload);
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
                const index=state.items.findIndex(item=>item.id===action.payload.id)
                if(index!=-1)
                {
                    state.items[index] = action.payload;
                }
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
                state.items = state.items.filter(item => item.id != action.payload);
                
            })
            .addCase(deleteApi.rejected, (state, action) => {
                state.deleteStatus = 'rejected';
                state.deleteError = action.payload;
            })
            .addCase(getAllApi.pending, (state) => {
                state.getAllStatus = 'loading';
            })
            .addCase(getAllApi.fulfilled, (state, action) => {
                state.getAllStatus = 'fulfilled';
                state.items = action.payload;
            })
            .addCase(getAllApi.rejected, (state, action) => {
                state.getAllStatus = 'rejected';
                state.getAllError = action.payload;
            })
            .addCase(totalSpentApi.pending, (state) => {
                state.spentStatus = 'loading';
            })
            .addCase(totalSpentApi.fulfilled, (state, action) => {
                state.spentStatus = 'fulfilled';
                state.spent = action.payload;
            })
            .addCase(totalSpentApi.rejected, (state, action) => {
                state.spentStatus = 'rejected';
                state.spentError = action.payload;
        })
    }
})

export const { reducer } = expenseSlice;
export default reducer;

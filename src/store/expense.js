import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    expenses:[],
    totalAmount:0

}


const expenseSlice = createSlice({
    name:"expense",
    initialState,
    reducers:{
        addExpense :(state, action)=>{
            return {
                expenses: [...state.expenses, action.payload],
                totalAmount: Number(state.totalAmount) + Number(action.payload.amount)
            }
        }
    },
})


export default expenseSlice.reducer;
export const expenseActions = expenseSlice.actions;
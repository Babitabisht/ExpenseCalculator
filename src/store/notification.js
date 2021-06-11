import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    status:"",
    title:"",
    message : ""
}

const notificationSlice = createSlice({
    name:"notification",
    initialState,
    reducers:{
        showNotification:(state, action )=>{
            return {
                status:action.payload.status,
                title:action.payload.title,
                message : action.payload.message
            }
        }
    }
})


export default  notificationSlice.reducer;
export  const notificationActions = notificationSlice.actions;
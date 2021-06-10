import { configureStore } from '@reduxjs/toolkit'
import expenseReducer from  './expense';



export default configureStore({
  reducer: {
      expense :expenseReducer
  },
})



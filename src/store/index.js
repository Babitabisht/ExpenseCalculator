import { configureStore } from '@reduxjs/toolkit'
import expenseReducer from  './expense';
import  notificationReducer from './notification';


export default configureStore({
  reducer: {
      expense :expenseReducer,
      notification:notificationReducer
  },
})



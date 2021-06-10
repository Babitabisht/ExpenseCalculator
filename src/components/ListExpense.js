import {Fragment} from 'react';
import ListItem from './ListItem';
import { useSelector } from 'react-redux'

const ListExpense =(props)=>{

    const expenseItems = useSelector(state=> state.expense.expenses)
   
    return (
        <Fragment> 
         
           {expenseItems.map(item=>{
              return  <ListItem  key={item.id} item={item} />
            })}
            
          
         </Fragment>   
    )
}


export default ListExpense;
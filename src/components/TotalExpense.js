// import {} from 'react';
import {  Button,Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const TotalExpenses = (props) =>{

  
  
  const addExpenses =(event)=>{
    event.preventDefault();
    props.addExpenses();
  }

  const totalAmount = useSelector((state) => state.expense.totalAmount);
  console.log("total amount", totalAmount)
    return (
        <Card className="text-center bg-dark text-light">
        <Card.Header>Expenses</Card.Header>
        <Card.Body>
          <Card.Title>Total Expenses Till now </Card.Title>
          <Card.Text>
          {totalAmount}
          </Card.Text>
          <Button  onClick={addExpenses}  variant="primary"  >Add Expenses</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    )
}


export default TotalExpenses;
import { Fragment, useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { expenseActions } from '../store/expense';
import { notificationActions } from '../store/notification';

const AddExpense = () => {

    const expenseRef = useRef();
    const amountRef = useRef();
    const dateRef = useRef();


    const dispatch = useDispatch()

    const onSubmitHandler = (event) => {
        event.preventDefault();
        let expense = {
            item: expenseRef.current.value,
            amount: amountRef.current.value,
            date: dateRef.current.value,
            id: Date.now()
        }
        let notification = {
            status: "success",
            title: "Notification sent!",
            message: `Expense with Id ${expense.id} Added!`
        }

        dispatch(expenseActions.addExpense(expense))

        dispatch(notificationActions.showNotification(notification))

        expenseRef.current.value = "";
        amountRef.current.value = 0;
        dateRef.current.value = "";


    }

    return (
        <Fragment>
            <Row className="mt-5">
                <Col md-3> </Col>
                <Col md-6>
                  
                        <Form onSubmit={onSubmitHandler}>
                            <Form.Group >
                                <Form.Label>Expense Item</Form.Label>
                                <Form.Control
                                    ref={expenseRef}
                                    className="" type="text" placeholder="Enter the item on which the expense has been made" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Amount</Form.Label>
                                <Form.Control
                                    ref={amountRef}
                                    type="number" placeholder="Amount" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    ref={dateRef}
                                    type="date" placeholder="Date" />
                            </Form.Group>
                            <Form.Group >
                                <Button type="submit" > Add </Button>
                            </Form.Group>
                        </Form>
                  
                </Col>
                <Col md-3> </Col>

            </Row>


        </Fragment>
    )
}


export default AddExpense;
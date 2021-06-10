import { Fragment, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TotalExpense from './TotalExpense';
import AddExpense from './AddExpense';
import ListExpense from './ListExpense';

const Layout = () => {

    const [showAddExpense, setShowAddExpense] = useState(false)

    const onAddExpenses = () => {
        setShowAddExpense(!showAddExpense);
    }

    return (
        <Fragment>
            <Container fluid>
                <Row>
                    <Col className="text-center">
                        <TotalExpense addExpenses={onAddExpenses} />
                    </Col>
                </Row>
                {showAddExpense &&
                    <Row>
                        <Col className="text-center">
                            <AddExpense />
                        </Col>
                    </Row>}

                <Row>
                    <Col className="text-center">
                        <ListExpense />
                    </Col>
                </Row>
            </Container>

        </Fragment>);

}

export default Layout;
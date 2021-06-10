import { Fragment } from 'react';
import { ListGroup , Card} from 'react-bootstrap'

const ListItem = (props) => {

    return (
        <Fragment>
            <Card >

            <ListGroup>
                <ListGroup.Item> {props.item.item} </ListGroup.Item>
                <ListGroup.Item>{props.item.amount}</ListGroup.Item>
                <ListGroup.Item>{props.item.date}</ListGroup.Item>
                <ListGroup.Item>{props.item.id} </ListGroup.Item>
            </ListGroup>
             </Card>
           

        </Fragment>
    )

}



export default ListItem;
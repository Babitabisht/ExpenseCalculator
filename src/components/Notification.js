import { Alert } from 'react-bootstrap';
import {Fragment} from 'react';


const Notification = (props) => {
   
    return (
        <Fragment>
          
           <Alert className="text-left mt-5 ml-5 mr-5" variant={props.notification.status}>
               <b> {props.notification.title} </b>
               <p>   {props.notification.message}
               </p>
            </Alert>
          
        </Fragment>
    );
}

export default Notification;
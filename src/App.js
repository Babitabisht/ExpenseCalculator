import './App.css';
import Container from 'react-bootstrap/Container';
import Layout from './components/Layout';
import { Fragment } from 'react';
import Notification from './components/Notification';
import {useSelector} from 'react-redux';

function App() {

  const notification = useSelector(state=>state.notification);

  return (
    <Fragment>
      <Notification  notification={notification} />
      <Container fluid>
        <Layout />
    </Container>
      </Fragment>
  );
}

export default App;

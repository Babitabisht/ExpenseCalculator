import './App.css';
import Container from 'react-bootstrap/Container';
import Layout from './components/Layout';
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <Container fluid>
        <Layout />
    </Container>
      </Fragment>
  );
}

export default App;

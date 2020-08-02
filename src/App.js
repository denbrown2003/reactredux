import React from 'react';
import { Container } from 'react-bootstrap'
import GlobalContext from './contexts/Global'
import { GetJson, PostJson } from './services/api/AxiosApi' 
import { Route } from "react-router-dom";
import Home from './pages/home/Home'

import thunk from 'redux-thunk'
import { createStore, applyMiddleware} from 'redux'
import { connect, Provider } from 'react-redux'

const App = () => {


  return (

      <Container fluid>
        <Route exact path='/' component={Home}/>


      </Container>
  )
  );
}
 
export default App;

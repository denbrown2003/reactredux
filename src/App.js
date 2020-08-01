import React from 'react';
import { Container } from 'react-bootstrap'
import GlobalContext from './contexts/Global'
import { GetJson, PostJson } from './services/api/AxiosApi' 
import { Route } from "react-router-dom";
import Home from './pages/home/Home'

function App() {

  return (
    <GlobalContext.Provider value={{}}>
      <Container fluid>
        <Route exact path='/' component={Home}/>


      </Container>
    </GlobalContext.Provider>
  );
}
 
export default App;

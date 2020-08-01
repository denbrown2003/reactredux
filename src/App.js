import React from 'react';
import { Container } from 'react-bootstrap'
import GlobalContext from './contexts/Global'
import { Get } from './services/api/AxiosApi' 

function App() {

  Get('http://localhost:5000/', {}, callback )

  function callback(json){ console.log(json) }

  return (
  <GlobalContext.Provider value={{}}>
    <Container fluid>
    





    </Container>
  </GlobalContext.Provider>
  );
}
 
export default App;

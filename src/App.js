import React from 'react';
import { Container } from 'react-bootstrap'
import GlobalContext from './contexts/Global'
import { GetJson, PostJson } from './services/api/AxiosApi' 

function App() {

  GetJson('/api/', {}, callback )
  PostJson('/api/post/', {}, callback)

  function callback(json){ console.log(json) }

  return (
  <GlobalContext.Provider value={{}}>
    <Container fluid>
    





    </Container>
  </GlobalContext.Provider>
  );
}
 
export default App;

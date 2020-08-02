import React from 'react';
import { Container } from 'react-bootstrap'
import GlobalContext from './contexts/Global'
import { GetJson, PostJson } from './services/api/AxiosApi' 
import { Route } from "react-router-dom";
import Home from './pages/home/Home'
import rootReducer from './store/reducers'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware} from 'redux'
import { connect, Provider } from 'react-redux'

const App = () => {
  const store = createStore(rootReducer, applyMiddleware(logger, thunk))

  return (
      <Provider store={store}>
        <Container fluid>
          <Route exact path='/' component={Home}/>


        </Container>
      </Provider>);
}
 
export default App;

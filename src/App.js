import React from 'react';
import { Container } from 'react-bootstrap'
import { Route } from "react-router-dom";
import Home from './pages/home/Home'
import rootReducer from './store/reducers'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware} from 'redux'
import { connect, Provider } from 'react-redux'
import { watchLoadData } from './store/sagas'
import { S2Watcher } from './store/sample2/sagas'

const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware))
  sagaMiddleware.run(S2Watcher);

  return (
      <Provider store={store}>
        <Container fluid>
          <Route exact path='/' component={Home}/>


        </Container>
      </Provider>);
}
 
export default App;

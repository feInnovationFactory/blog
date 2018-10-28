import { createStore, applyMiddleware, compose } from 'redux'
//  import thunk from 'redux-thunk'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
// 使store可以支持调试， 同时引用了thunk
const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

  }) : compose

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
)

const store = createStore(
  reducer,
  enhancer

)

sagaMiddleware.run(todoSagas)

export default store

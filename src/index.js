// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux'
// import rootReducer from './reducers/rootReducer'


// const store = createStore(rootReducer)

// ReactDOM.render( 
//     <Provider store={store}>
//         <AppRoutes/>
//    </Provider>,
//     document.getElementById('root')
// );


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import loggerMiddleware from './middleware/logger'
import monitorReducerEnhancer from './enhancers/monitorReducer'
import AppRoutes from './routes';

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)

const store = createStore(rootReducer, undefined, composedEnhancers)

render( 
    <Provider store={store}>
        <AppRoutes/>
   </Provider>,
    document.getElementById('root')
);
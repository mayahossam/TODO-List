import React,{Component}  from 'react'
import ReactDOM from 'react-dom'
//import './styles/stylesheet.css'
import './styles/stylesheet.scss'

import Main from './Components/Main'
import { createStore, compose, applyMiddleware } from 'redux';//const tasks=['Take out the trash','wash hand','read book'];
//const element=React.createElement('ol',null,tasks.map((task,index)=>
//React.createElement('li',{key:index},task)));
//instead of calling the static task array, you will the the list and its property
//  {this.props.tasks.map((task,index)=> <li key= {index}>{task} </li>)}
//import store from './store/store';
//import { getTodos } from './action/todos';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import rootReducer from './reducers/index';


import { Provider } from 'react-redux';
import thunk from "redux-thunk";


const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//const store=createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><BrowserRouter><Main/></BrowserRouter></Provider>,document.getElementById("root"));
/*
const template = (
    <Provider store={store}>
        <Main />
    </Provider>
);
console.log(store.getState());
    ReactDOM.render(template, document.getElementById('root'));
*/

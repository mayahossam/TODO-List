import React,{Component}  from 'react'
import ReactDOM from 'react-dom'
//import './styles/stylesheet.css'
import './styles/stylesheet.scss'
import {BrowserRouter} from 'react-router-dom'
import{createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Components/App'
//const tasks=['Take out the trash','wash hand','read book'];
//const element=React.createElement('ol',null,tasks.map((task,index)=>
//React.createElement('li',{key:index},task)));
//instead of calling the static task array, you will the the list and its property
//  {this.props.tasks.map((task,index)=> <li key= {index}>{task} </li>)}

const store=createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'));

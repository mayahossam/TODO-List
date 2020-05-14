/*
import Main from './Main'
import {connect}from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router'
//import removePost from '../redux/actions'
*/

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import Main from './Main'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from'./Main'
import '../styles/app.scss'

import store from '../store/store';
//import { getTodos } from './action/todos';

import { Provider } from 'react-redux';
class App extends Component {
  render() {
    return (
      
                    <Route exact path="/" component={Main} />


       );
  }
}

export default App;

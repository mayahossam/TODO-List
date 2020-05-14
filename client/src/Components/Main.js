
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import Main from './Main'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from'./List'
import '../styles/app.scss'
import { Button,FormGroup,TextInput,OrderedList,ListItem } from "carbon-components-react";
import { fetchtodo } from '../action/todos';
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../action/todos'
import AddTodo from './AddTodo.js'
import {Link} from 'react-router-dom'
//import {withRouter} from 'react-router'
class Main extends Component {
constructor(){
  super()
  console.log("constructor");
}

  componentDidMount() {
    console.log("this.props.getTodos()");

this.props.fetchtodo();
  }

  render() {
    return (
      <div>

      <h1 className="todo__heading">
  <Link to= "/"> My TODO List </Link>

    {console.log(this.props)}
    <List {...this.props} />

  </h1>



    </div>)
}
}
//<AddTodo {...this.props} />

const mapStateToProps = (state) => {
  console.log("state")

  console.log(state.todos)

    return {
        todos: state.todos
    };
}
function mapDispatchToProps(dispatch){
return bindActionCreators(actions, dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
export default App
/*
import React,{Component} from 'react'
//import Title from './Title'
//import List from'./List'
//import AddTodo from './AddTodo.js'
import {Route} from 'react-router-dom'
import {removeTodo} from '../redux/actions'
import {Link} from 'react-router-dom'
import axios from 'axios'

//import Single from './Single'
import '../styles/app.scss'
import { Button,FormGroup,TextInput,OrderedList,ListItem } from "carbon-components-react";
class Main extends Component{
  constructor(){
    super();
//  this.submitForm = this.submitForm.bind(this);
//   this.deleteForm = this.deleteForm.bind(this);
  // this.editForm = this.editForm.bind(this);
   //this.editChecked = this.editChecked.bind(this);
   //this.reOrderList = this.reOrderList.bind(this);
   }

   callAPI() {

       axios.get('/todo',{headers: { 'csrf-token':'casw','x-Gateway-Apikey':'fixed' }})
           .then(res => res.data)
           .then(todos => this.setState({ todos}));
   }

   componentWillMount() {
       this.callAPI();
   }

  render(){
  console.log(this.props.todos)

    console.log(this.state.todos)
    return(
          <div>
              <h1 className="todo__heading">
              <Link to= "/"> My TODO List </Link>


              </h1>



          </div>)
  }
}
/*
<div className="bx--col-lg-4">
    <PhotoWall {...this.props}/>
  </div>
*/
//}
//<PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />

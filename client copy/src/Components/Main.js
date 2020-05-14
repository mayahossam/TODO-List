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
  constructor(props){
    super(props);
this.state = {todos: []};
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





export default Main

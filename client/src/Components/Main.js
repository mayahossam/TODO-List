import React,{Component} from 'react'
//import Title from './Title'
import List from'./List'
import AddTodo from './AddTodo.js'
import {Route} from 'react-router-dom'
import {removePost} from '../redux/actions'
import {Link} from 'react-router-dom'
//import Single from './Single'
import '../styles/app.scss'
import { Button,FormGroup,TextInput,OrderedList,ListItem } from "carbon-components-react";
class Main extends Component{
  constructor(){
    super()
   }
   
  render(){
    console.log('post')

    console.log(this.props.todos)
    return(
          <div>
              <h1 className="todo__heading">
              <Link to= "/"> My TODO List </Link>
                <AddTodo {...this.props}/>

                <List {...this.props}/>

              </h1>
              <Route exact path="/" render={() => (
                <div>
                <List {...this.props}/>
                </div>

            )}/>


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

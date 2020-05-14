import React,{Component} from 'react';
import axios from 'axios'
//import logo from './logo.svg';
import '../styles/app.scss'

import { Button,FormGroup,TextInput,OrderedList,ListItem } from "carbon-components-react";

class App extends Component{

    state = {todos: []}


callAPI() {

    axios.get('/todo',{headers: { 'csrf-token':'casw','x-Gateway-Apikey':'fixed' }})
        .then(res => res.data)
        .then(todos => this.setState({ todos}));
}

componentWillMount() {
    this.callAPI();
}
render(){
  console.log(this.state.todos);

  return(<div>
        <h1 className="todo__heading">
        TODO
        </h1>
        <div  className= "landing-page__p" >

                <TextInput
                  id="test2"
                  labelText="Add your new item"
                  placeholder=""
                  size="sm"
                />
          <Button size='small'>Post</Button>

          </div>
    <div className="landing-page__p">

  {this.state.todos.map((list,index) =>

   <div key={index} >{list.item}</div>
   )}
   <Button size='small'>edit </Button>
   <Button size='small'>delete </Button>

 </div>
 </div>
  )
}
}


export default App;

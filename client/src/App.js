import React,{Component} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
//import { Button,FormGroup,TextInput,OrderedList,ListItem } from "carbon-components-react";

class App extends Component{

    state = {lists: []}


callAPI() {

    axios.get('/todo',{headers: { 'csrf-token':'casw','x-Gateway-Apikey':'fixed' }})
        .then(res => res.data)
        .then(lists => this.setState({ lists}));
}

componentWillMount() {
    this.callAPI();
}
render(){
  console.log(this.state.lists);

  return(<p className="App-intro">
  {this.state.lists.map((list,index) =>

   <div key={index} >{list.item}</div>
 )}
 </p>
  )
}
}


export default App;

import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { Button,FormGroup,TextInput,OrderedList,ListItem } from "carbon-components-react";
import { addTodo } from '../action/todos';
import {connect} from 'react-redux'

class AddTodo extends Component{
//this.handleSubmit=this.handleSubmit.bind(this);
task={
  id:'',
  item:''
}

  handleChange = (e) =>{
    e.preventDefault();

    const item=e.target.value
  //  console.log(e.target);


          //  this.props.addTodo(todo)

          if(item ){
          this.task= [{id: Number(new Date()),
                    item:item}];
                    console.log('Add', this.task);
//this.setState( {id: Number(new Date()),
  //      item:item}
//})
        //  this.props.onHistory.push('/')
          }    //  this.props.onHistory.push('/')

}

onAddClicked = () => {
  //   console.log('Add', this.state.text)
     //Dispatch Action
  //   this.props.addTodo(this.state.text);
  const items = this.props

  console.log("this.props");

  console.log(this.props);
  console.log(this.task[0]);

  items.dispatch(addTodo(this.task[0]));
  //todo.addTodo(this.todo)


}
/*
  handleSubmit(e){
    console.log("trial");
//event.preventDefault();
const item=e.target.value
//const item=e.target.elements.item.value;

const todo= [{id: Number(new Date()),
        item:item
}]
if(item){
this.props.addTodo(todo)
this.props.onHistory.push('/')
}

  }
*/
  render(){


    return <div  className= "landing-page__p" >
    <form  >

            <TextInput onChange={this.handleChange}
              id="test2"
              labelText="Add your new item"
              placeholder=""
              size="sm"
            />
      <Button  onClick={this.onAddClicked} size='small'>Post</Button>
      </form>
          </div>
  }
}
//


export default connect()(AddTodo);

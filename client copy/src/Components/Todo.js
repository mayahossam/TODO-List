import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Button ,TextInput} from "carbon-components-react";
import EditTodo from './AddTodo.js'
export default class Todo extends Component {

  constructor () {
   super();
    this.state = { editing: false,id:'' }


}

  handleEditing (event) {
    console.log(this.props.todo.id);
    this.setState({ editing:  true,id:this.props.todo.id });
    var item = event.target.value;

  //  this.flag.editing=true ;
  //  console.log(this.flag.editing);

  }

  handleEditingDone (event) {
    console.log(this.props.todo.id);

    if (event.keyCode === 13 ) { // submit
    this.setState({ editing:  false });

  }
  var item = event.target.value;
  if(item ){
  var todo= [{id: this.props.todo.id,item:item}];
            console.log('done', todo);
//this.setState( {id: Number(new Date()),
//      item:item}
//})
//  this.props.onHistory.push('/')
  this.props.addTodo(todo,this.props.todo.id)
  this.props.removeTodo(this.props.index)

  }

}
  handleEditingChange (event) {
    //console.log(this.props.index);
    var item = event.target.value;

    if(item ){
    var todo= [{id: this.props.todo.id,item:item}];
              console.log('Add', todo);
  //this.setState( {id: Number(new Date()),
  //      item:item}
  //})
  //  this.props.onHistory.push('/')
    }

}

render() {
const todo=this.props.todo

var viewStyle = {};
var editStyle = {};
console.log("editing");


    if (this.state.editing) {
      viewStyle.display = 'none';
    } else {
      editStyle.display = 'none';
    }
console.log(todo);
          return<div className="landing-page__p">
                  <div style={viewStyle}>
                <Link to=  {`/todo/${todo.id}`}/>
                  <p> {todo.item} </p>
                  <Button size='small' onClick = { () => {
                    this.props.removeTodo(this.props.index)
                //  console.log(todo.description)
              }}> Remove </Button>

              <Button size='small' onClick ={this.handleEditing.bind(this)

              }> Edit </Button>
                  </div>
                  <div style={editStyle}>

                              <TextInput onChange={this.handleChange}
                              onKeyDown={this.handleEditingDone.bind(this)}
                      onChange={this.handleEditingChange.bind(this)}
                                id="test2"
                                labelText="Add your new item"
                                placeholder=""
                                size="sm"
                              />
                  </div>
                </div>
}
}
Todo.propTypes={
  todo:PropTypes.object.isRequired,
}
//onKeyDown={this.handleEditingDone.bind(this)}
//onChange={this.handleEditingChange.bind(this)}
//style={editStyle}

import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Button ,TextInput} from "carbon-components-react";

import { connect } from 'react-redux';
import { Removetodo } from '../action/todos';

 class Todo extends Component {
  //console.log(props.todos);
  constructor () {
   super();
    this.state = { editing: false,id:'' }


}

  handleEditing (event) {
    //console.log(todo.id);
    this.setState({ editing:  true,id:this.props.id });
    var item = event.target.value;

  //  this.flag.editing=true ;
  //  console.log(this.flag.editing);

  }

  handleEditingDone (event) {
    console.log(this.props.id);

    if (event.keyCode === 13 ) { // submit
    this.setState({ editing:  false });

  }
  var item = event.target.value;
  if(item ){
  var todo= [{id: this.props.id,item:item}];
            console.log('done', todo);
//this.setState( {id: Number(new Date()),
//      item:item}
//})
//  this.props.onHistory.push('/')
  this.props.addTodo(todo,this.props.id)
  this.props.removeTodo(this.props.index)

  }

}
  handleEditingChange (event) {
    //console.log(this.props.index);
    var item = event.target.value;

    if(item ){
    var todo= [{id: this.props.id,item:item}];
              console.log('Add', todo);
  //this.setState( {id: Number(new Date()),
  //      item:item}
  //})
  //  this.props.onHistory.push('/')
    }

}

render() {
  const todo = this.props
  const id=todo.id
//const todo=this.props.todo
console.log(todo.dispatch);

console.log("editing");

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
                  <Button size='small' onClick={() => {
            todo.dispatch(Removetodo({ id }));
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
/*
const mapDispatchToProps = dispatch => ({

    delete_action: (id) => dispatch(Removetodo(id))
})
*/

export default connect()(Todo);
/*
const Todo = ({ id, item }) => (
    <div>
    <div className="landing-page__p">
            <div >
          <Link to=  {`/todo/${id}`}/>
            <p> {item} </p>
            <Button size='small' onClick = { () => {
              //  dispatch(removeTodo({ id }));
          //  console.log(todo.description)
        }}> Remove </Button>

        <Button size='small' > Edit </Button>
            </div>
            <div >

                        <TextInput
                          id="test2"
                          labelText="Add your new item"
                          placeholder=""
                          size="sm"
                        />
            </div>
          </div>
    }
    </div>
);

export default connect()(Todo);
*/

//onKeyDown={this.handleEditingDone.bind(this)}
//onChange={this.handleEditingChange.bind(this)}
//style={editStyle}

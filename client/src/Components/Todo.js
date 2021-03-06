import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Button ,TextInput} from "carbon-components-react";

import { connect } from 'react-redux';
import { Removetodo,editTodo } from '../action/todos';

 class Todo extends Component {
  //console.log(props.todos);
  constructor () {
   super();
    this.state = { editing: false,id:'',index:'' }


}

  handleEditing (event) {
    //console.log(todo.id);
    this.setState({ editing:  true,id:this.props.id , index:this.props.index});
    var item = event.target.value;

  //  this.flag.editing=true ;
  //  console.log(this.flag.editing);

  }

  handleEditingDone (event) {
    console.log(this.props.id);

    if (event.keyCode === 13 ) { // submit
    this.setState({ editing:  false });


  var item = event.target.value;
  if(item ){
  var todo= [{index: this.props.index,item:item}];
            console.log('done', todo);
//this.setState( {id: Number(new Date()),
//      item:item}
//})
//  this.props.onHistory.push('/')
var edit=this.props
var index=this.props.id
var update=todo[0].item
var index= this.props.index
edit.dispatch(editTodo(todo[0]));

  //edit.dispatch(editTodo(index,update));


  }
    }

}
  handleEditingChange (event) {
    //console.log(this.props.index);
    var item = event.target.value;

    if(item ){
    var todo= [{id: this.props.id,item:item}];
          //    console.log('Add', todo);
  //this.setState( {id: Number(new Date()),
  //      item:item}
  //})
  //  this.props.onHistory.push('/')
    }

}

render() {
  const todo = this.props
  const id=todo.id
  const index=todo.index
//const todo=this.props.todo
console.log("delete");

console.log(todo.index);

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
                <Link to=  {`/todo/${todo.index}`}/>
                  <p> {todo.item} </p>
                  <Button size='small' onClick={() => {
            todo.dispatch(Removetodo({ id }));
        }}> Remove </Button>

              <Button size='small' onClick ={this.handleEditing.bind(this)

              }> Edit </Button>
                  </div>
                  <div style={editStyle}>
                  <Link to=  {`/todo/${todo.id}`}/>
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

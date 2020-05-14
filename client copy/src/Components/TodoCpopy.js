import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Button ,TextInput} from "carbon-components-react";
import EditTodo from './AddTodo.js'

function Todo(props) {
const todo=props.todo
console.log(todo);
          return<div className="landing-page__p">
                  <p> {todo.item} </p>
                  <div >
                  <Button size='small' onClick = { () => {
                    props.removeTodo(props.index)
                //  console.log(todo.description)
              }}> Remove </Button>
              <div>
              <Button size='small' onClick = { () => {
            //  console.log(todo.description)
          }}> Edit </Button>
          </div>
                  </div>
                  <TextInput
                    id="test2"
                    labelText="Add your new item"
                    placeholder=""
                    size="sm"
                  />
                </div>
}
Todo.propTypes={
  todo:PropTypes.object.isRequired,
}
export default Todo

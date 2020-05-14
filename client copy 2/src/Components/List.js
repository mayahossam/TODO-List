import React from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Button,FormGroup,TextInput,OrderedList,ListItem } from "carbon-components-react";
import {connect} from 'react-redux'
import AddTodo from './AddTodo.js'

const List = ({ todos,dispatch }) => (
  <div>
  <AddTodo todos={todos} dispatch={dispatch}/>

  <ul className="todo-list">
     {todos && todos.length
       ? todos.map((todo, index) => {
         console.log(`IDS: ${todo.id}`);
         console.log(index);
         console.log(todo);
           return <Todo key={`todo-${todo.id}`} id={todo.id} item={todo.item} dispatch={dispatch}  />;
         })
       : "No todos, yay!"}
   </ul>
</div>
);


/*

const List=(props) => (
        return  <div>
          <OrderedList >
          {console.log("List")}

            {console.log(props.todos)}

          </OrderedList>
        </div>
})
*/
//{props.todos.map(todo => <Todo key={todo.id} todo = {todo.item}  />)};

//{props.map(todo => <Todo key={todo.id} {...props} todo = {todo.item}  />)};

export default connect()(List)

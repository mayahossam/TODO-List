import React from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Button,FormGroup,TextInput,OrderedList,ListItem } from "carbon-components-react";

function List(props){
  console.log("props")
    console.log(props.todo)
  return <div>
          <OrderedList >
          {this.props.todos
            .sort(function(x,y){
              return y.id-x.id
            })
            .map((todo,index) => <Todo key={index} todo = {todo} {...props} index={index} />)}
          </OrderedList>
        </div>
}
List.propTypes={
  todos:PropTypes.array.isRequired,
}
export default List

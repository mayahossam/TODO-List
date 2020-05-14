//const todos=[{id:1,item: 'get milk'},{id:2,item: 'walk the dog'}, {id:3,item: 'coding'}];
//export default todos
import { createStore, combineReducers,applyMiddleware } from "redux";
import todos from '../reducers/todos';
import thunk from 'redux-thunk';


const store = createStore(
  combineReducers({
    todos: todos
  }),
  applyMiddleware(
    thunk
  )
);

export default store;

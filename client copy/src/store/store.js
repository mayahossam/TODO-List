//const todos=[{id:1,item: 'get milk'},{id:2,item: 'walk the dog'}, {id:3,item: 'coding'}];
//export default todos
import { createStore, applyMiddleware } from "redux";
import books from '../reducers/books';
import thunk from 'redux-thunk';

export default () => {
    return createStore(todos, applyMiddleware(thunk));
};

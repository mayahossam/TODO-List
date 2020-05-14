//import todos from '../data/todos'
import  {GET_Todo,Remove_Todo,Add_Todo, Edit_Todo} from '../constants/actionTypes';

const initialstate = { todos: [],
}
const postReducer=function post(state= initialstate ,action){
    var updated = Object.assign({}, state)
    console.log("Reducer");
    console.log(action.todos);

if(action.type==='Add_Todo'){
  var newitem=action.todo
  console.log('try')
  console.log( newitem)

}
if(action.type==='edit_Todo'){
  var newitem=action.todo

}

    switch(action.type){

      case 'Remove_Todo':
console.log("REMOVE_TODO");
console.log(action.id);

 return state.filter(({ id }) => id !== action.id);

    //  return[...state.slice(0,action.index), ...state.slice(action.index + 1)]
      case 'Add_Todo':
      console.log("Add_Todo");

       return [...state, newitem]
      case 'edit_Todo':
        console.log("edit_Todo");
      return [...state.slice(0,action.id), newitem,...state.slice(action.id + 1)]
      case 'GET_Todo':
      console.log("Get_Todo");
      console.log(state.todos);

      return action.todos
      default:return state
    }

}

export default postReducer

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
if(action.type==='Edit_Todo'){
  var newitem={id:action.id,item:action.item}
  console.log("editing Item and priting id")
  console.log(newitem[0])
  console.log(action.id)


  var id1=action.id
  console.log(newitem)
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
      case 'Edit_Todo':
        console.log("edit_Todo");
        console.log(action.index);
        console.log(state);

         return [...state.slice(0,action.index),newitem,...state.slice(action.index + 1)]
        /*
        return state.map((todo) => {
            if (todo.id === action.index) {
              console.log("insideif")
              console.log(todo.id)
                return {
                    ...todo,
                    ...newitem
                };
            } else {
                return todo;
            }
        });
        */
      // [...state.slice(0,action.id),...state.slice(action.id + 1)]
      case 'GET_Todo':
      console.log("Get_Todo");
      console.log(state.todos);

      return action.todos
      default:return state
    }

}

export default postReducer

import axios from '../axios/axios';
import  {GET_Todo,Remove_Todo,Add_Todo,Edit_Todo} from '../constants/actionTypes';
function getTodos(todos){
  console.log("todos")

  console.log(todos)
    return {
        type: 'GET_Todo',
        todos: todos
    }

}
export const Removetodo = ({ id } = {}) => {
  console.log("delete")

    return (dispatch) => {
      return axios.delete(`todo/${id}`,{headers: { 'csrf-token':'casw','x-Gateway-Apikey':'fixed' }})
        .then(() => {
            dispatch(    {
                  type:'Remove_Todo',
                  id:id
                })
        })
    }
};


export const addTodo = (todoData = {
    id: '',
    item: '',

}) => {
  console.log("Add data")
  console.log("todoData.id")
  console.log(todoData.id)
console.log(todoData.item)
    return (dispatch) => {
        const todo = {
            id: todoData.id,
            item: todoData.item,

        };

        return axios.post('todo/', todo,{headers: { 'csrf-token':'casw','x-Gateway-Apikey':'fixed' }})
        .then(result => {
          dispatch(    {
                type:'Add_Todo',
                todo:result.data
              })
      })
  }
};

export function fetchtodo(){
    return dispatch => {
        return axios.get('todo',{headers: { 'csrf-token':'casw','x-Gateway-Apikey':'fixed' }})
      .then(response => response.data)
        .then( (data) => dispatch(
      {


        type: "GET_Todo", todos: data})).catch(err => dispatch({
          type: "ERROR", msg: "FAILED"}))
  }
}






/*
export function removeTodo(index){
  return{
    type:'Remove todo',
    index:index
  }
}
*/
  export function editTodo(index,todo){
        console.log('additem'+ todo)
    return{
      type:'edit_Todo',
      todo:todo,
      index:index

    }
  }


 //export default removePost,addPost

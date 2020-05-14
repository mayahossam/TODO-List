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
export const editTodo = (Data = {
    index: '',
    item: '',

}) => {
  console.log("editTodo")
  console.log("todoData.id")
  console.log(Data.index)
console.log(Data.item)
    return (dispatch) => {
        const todo = {
            index: Data.index,
            item: Data.item,

        };

        return axios.patch('todo/', todo,{headers: { 'csrf-token':'casw','x-Gateway-Apikey':'fixed' }})
        .then(result => {
          dispatch(    {
                type:'Edit_Todo',
                item:result.data.item,
                id:result.data.id,
                index:result.data.index
              })
      })
  }
};
/*
export const editTodo = ( updates) => {
  console.log("Edit data")

  console.log(updates)
  //console.log(id)

    return (dispatch) => {
      const todo = {
          id: updates.id,
          item:updates.item,

      };
        return axios.patch('todo', todo.item,{headers: { 'csrf-token':'casw','x-Gateway-Apikey':'fixed' }}).then(result => {
            dispatch(    {
                  type:'Edit_Todo',
                  item:result.data.item,
                  id:result.data.id
                })
        })
    }
  };
*/


 //export default removePost,addPost

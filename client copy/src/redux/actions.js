export function removeTodo(index){
  return{
    type:'Remove todo',
    index:index
  }
}

export function addTodo(todo){
      console.log('additem'+ todo)
  return{
    type:'Add_Todo',
    todo:todo

  }
}
  export function editTodo(index,todo){
        console.log('additem'+ todo)
    return{
      type:'edit_Todo',
      todo:todo,
      index:index

    }
  }


 //export default removePost,addPost

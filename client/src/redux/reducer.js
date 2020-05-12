import todos from '../data/todos'
const postReducer=function post(state = todos,action){
if(action.type==='Add_Todo'){
  var newitem=action.todo[0]
  console.log('try')
  console.log('try'+ newitem)

}
if(action.type==='edit_Todo'){
  var newitem=action.todo[0]

}
    switch(action.type){
      case 'Remove todo':return[...state.slice(0,action.index), ...state.slice(action.index + 1)]
      case 'Add_Todo': return [...state, newitem]
      case 'edit_Todo': return [...state.slice(0,action.index), newitem,...state.slice(action.index + 1)]

      default:return state
    }

}

export default postReducer

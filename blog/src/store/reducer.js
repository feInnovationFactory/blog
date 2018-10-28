import { ADD_TODOLIST, HANDLE_INPUT_CHANGE, DEL_TODO_ITEM, GET_INIT_LIST } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case HANDLE_INPUT_CHANGE:
      newState.inputValue = action.value
      return newState
    case ADD_TODOLIST:
      newState.list = [...newState.list, action.value]
      newState.inputValue = ''
      return newState
    case DEL_TODO_ITEM:
      newState.list.splice(action.value, 1)
      return newState
    case GET_INIT_LIST:
      newState.list = action.value
      return newState
    default:
      return newState
  }
}

export default reducer

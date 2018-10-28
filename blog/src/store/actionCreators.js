/**
 * 统一action
 */
import {
  ADD_TODOLIST,
  HANDLE_INPUT_CHANGE,
   DEL_TODO_ITEM,
   GET_INIT_LIST
  } from './actionTypes'
export const getInputChangeAction = (value) => {
  return {
    type: HANDLE_INPUT_CHANGE,
    value
  }
}

export const addTodoListAction = (value) => {
  return {
    type: ADD_TODOLIST,
    value
  }
}

export const delTodoList = (value) => {
  return {
    type: DEL_TODO_ITEM,
    value
  }
}
export const getInitListAction = (value) => {
  return {
    type: GET_INIT_LIST,
    value
  }
}
// 函数里面做异步操作 redux-thunk
export const getTodoList = () => {
  return (dispatch) => {

  }
}


import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { getInitListAction } from './actionCreators'
import axios from 'axios'

function * getTodoList () {
  try {
    const res = yield axios.get('./list.json')
    const action = getInitListAction(res.data.result)
    console.log(action)

    // yield put(action)
  } catch (e) {
    console.log('网络请求失败')
  }
}

function * mySaga () {
  yield takeEvery(GET_INIT_LIST, getTodoList)
}

export default mySaga

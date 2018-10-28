import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import './style.css'
import { Input, Button, List } from 'antd'
import {
  getInputChangeAction,
  addTodoListAction,
  delTodoList,
  getInitListAction
}from './store/actionCreators'
import store from './store'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    store.subscribe(this.handStoreChange)
  }
  componentDidMount(){
    const action = getInitListAction()
    store.dispatch(action)
  }

  handStoreChange = () =>{
    this.setState(store.getState())
  }

  handleInputChange (e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  add = () => {
    if (this.state.inputValue) {
      const action = addTodoListAction(this.state.inputValue)
     store.dispatch(action)
    }
  }

  remove = (index) => {
    const action = delTodoList(index)
    store.dispatch(action)
  }

  render () {
    return (
      <Fragment>
        <div>
          <Input 
          value = {this.state.inputValue}
          placeholder="Basic usage" 
          style={{width: 300, marginRight: 20, marginTop: 20}}
          onChange={this.handleInputChange} />
          <Button type="primary" onClick={this.add}>提交</Button>
        </div>
        <List
          style={{width: 300, marginTop: 20}}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => (<List.Item onClick={this.remove.bind(this,index)}>{item}</List.Item>)}
        />
      </Fragment>
    )
  }
}

export default TodoList

import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }
  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  add () {
    if (this.state.inputValue) {
      let _list = this.state.list
      _list.push(this.state.inputValue)
      this.setState({
        inputValue: '',
        list: _list
      })
    }
  }
  remove (index) {
    this.state.list.splice(index, 1)

    this.setState({
      list: this.state.list
    })
  }
  render () {
    return (
      <Fragment>
        <div>
          <input type='text' value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.add.bind(this)}>提交</button>
        </div>
        <ul>
          {
           this.state.list.map((item, index) => {
             return (
               <li key={index}>{item} <span onClick={this.remove.bind(this, index)}>X</span></li>
             )
           })
         }
        </ul>
      </Fragment>
    )
  }
}

export default TodoList

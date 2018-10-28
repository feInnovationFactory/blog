import React, {Component} from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor (props) {
    super(props)
    this.remove = this.remove.bind(this)
  }
  remove () {
    // 子组件调用父组件方法 改变父组件数据
    const { remove, index } = this.props
    remove(index)
  }
  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.item) { return false }
  }
  render () {
    console.log('child render')
    const { item, test } = this.props
    return (
      <li >{test}--{item}<span onClick={this.remove}>X</span></li>
    )
  }
}
// 限制父组件传值类型
TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number,
  remove: PropTypes.func
}
TodoItem.defaultProps = {
  test: 'hello'
}
export default TodoItem

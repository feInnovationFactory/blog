import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavSearch,
  NavItem,
  Addition,
  Button,
  IconFloat
} from './style'

const Header = (props) => {
  const { focused, handleInputFoucs, handleInputBlur } = props
  return (
    <HeaderWrapper>
      <Logo href='/'>
        <img src='/static/img/logo.png' height='56' alt='logo' />
      </Logo>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavSearch>
          <CSSTransition
            timeout={200}
            in={focused}
            classNames='slide'
          >
            <input
              className={focused ? 'input focused' : 'input'}
              onFocus={handleInputFoucs}
              onBlur={handleInputBlur}
              placeholder='搜索'
            />
          </CSSTransition>
          <IconFloat>
            <i className='icon iconfont' >&#xe693;</i>
          </IconFloat>
        </NavSearch>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className='icon iconfont'>&#xe636;</i>
        </NavItem>
      </Nav>
      <Addition>
        <Button className='write'>
          <i className='icon iconfont'>&#xe608;</i>
        写文章</Button>
        <Button className='signup'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFoucs () {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur () {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header)

import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 2px solid #f0f0f0;
  position: relative;
  width: 100%;
  font-size: 17px;
`
export const Logo = styled.a`
  position: absolute;
  left: 0;
  top:0;
`
export const Nav = styled.div`
  margin: 0 auto;
  width: 58vw;
  height: 100%;
`

export const NavItem = styled.div`
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
  padding: 0 15px;
  line-height: 56px;
  color: #333;
  display: inline-block;

`
export const NavSearch = styled.div`
  display: inline-block;
  margin-left: 15px;
  line-height: 56px;
  .slide-enter{
    transition: all .2s ease-out;
  }
  .slide-enter-active{
    width: 240px;
  }
  .slide-exit{
    transition: all .2s ease-out;
  }
  .side-exit-active{
    width: 160px;
  }
  &>.input{
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
  }
  &>.input.focused{
    width: 240px;
  }
  &>.input:focus{
    outline: none;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const Button = styled.div`
  float: right;
  padding: 6px 12px;
  width: 80px;
  height: 26px;
  line-height: 26px;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  text-align: center;
  background-color: transparent;
  &.write{
    color: #fff;
    background-color: #ea6f5a;
  }
  &.signup{
    width: 56px;
  }
  &:hover{
    color: #fff;
    background-color: #ec6149;
  }

`
export const IconFloat = styled.div`
  display: inline-block;
  margin-left: -30px;
`

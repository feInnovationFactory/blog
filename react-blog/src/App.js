import React, { Component } from 'react'
import '../src/styles/base'
// import { Wrapper } from './style.js'
import Header from '../src/common/header'
import store from '../src/store'
import {Provider} from 'react-redux'
// import styled from 'styled-components'
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Header />
      </Provider>
    )
  }
}

export default App

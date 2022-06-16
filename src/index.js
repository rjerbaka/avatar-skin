import React from 'react'
import ReactDom from 'react-dom'
import { Leva } from 'leva'
import './styles.css'
import App from './App'

ReactDom.render(
  <>
    <App />
    <Leva collapsed />
  </>,
  document.querySelector('#root'),
)

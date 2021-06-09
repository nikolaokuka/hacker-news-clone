import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './components/Nav'

import './index.css'

export default function App() {
  return (
    <div className='container'>
      <Nav />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
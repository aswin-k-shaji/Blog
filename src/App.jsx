import React from 'react'
import Navbar from './component/Navbar'
import Content from './component/Content'

const App = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}} >
      <Navbar/>
      <div style={{display:'flex',alignItems:'center',}} >
        <h1>Make Your Own Blog</h1>
      </div>
      <Content/>
    </div>
  )
}

export default App
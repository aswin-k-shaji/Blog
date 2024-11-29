import React from 'react'
import Add from './Add'
import './navbar.css'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
    <Router>
      <div className='main'>
        <nav>
          <Link style={{
            marginRight: 20,
            textDecoration: 'none',
            color:'blue',
            fontWeight: 'bold',
          }}to="/hm" >Home</Link>
          <Link 
          style={{
            marginRight: 20,
            textDecoration: 'none',
            color:'blue',
            fontWeight: 'bold',
          }}
          to="/add" >Add Blog</Link>
        </nav>
      </div>
      <Routes>
        <Route path='/add' element={<Add/>}/>
      </Routes>
    </Router>
    </div>
  )
}
export default Navbar
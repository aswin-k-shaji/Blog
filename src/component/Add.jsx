import React from 'react'
import './add.css'

const Add = () => {
  return (

    <div className="signup-container">
      <form className="signup-form">
        <h2>Create Blog</h2>
        <div className="form-group">
          <label htmlFor="name">Title</label>
          <input
          type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Body</label>
          <textarea style={{height:70,width:340}} type="textarea"  id="username" name="username" placeholder="Enter the body" />
        </div>
        <div className="form-group">
          <button type="submit" className="register-button">Register</button>
          <button type="button" className="cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Add
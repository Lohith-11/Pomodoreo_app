import React from 'react'

const Blog = (props) => {
  return (
    <div>
      <h1>I am a Blog Component</h1>
      <h1>Hello! {props.fname}</h1>
      {props.salary && <h1>My Salary is {props.salary}</h1>}
    </div>
  )
}

export default Blog

import React from 'react'

const User = (props) => {
    console.log(props.data)
  return (
    <div>
    <h1>user info</h1>
    <h1>{props.data.name}</h1>
    <p>{props.data.age}</p>
      
    </div>
  )
}

export default User

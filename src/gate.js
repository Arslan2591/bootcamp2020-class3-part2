import React from 'react'

const Gate = (props) => {
  return (
    <div>
      <h3>{props.isOpen ? "open": "closed"}</h3>
      <h2>hello</h2>
    </div>
  )
}

export default Gate

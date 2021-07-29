import React from 'react'

const Gate = (props) => {
  return (
    <div>
      <h3>{props.isOpen ? "open": "closed"}</h3>
    </div>
  )
}

export default Gate

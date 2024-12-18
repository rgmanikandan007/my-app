import React from 'react'

function Alert() {
    const handleAlert = () => {
        alert("Clicked");
    }
  return (
    <div>
        <button onClick={handleAlert}>Click</button>
    </div>
  )
}

export default Alert
import React from 'react'

function ChildComponent(props) {
  console.log("Child Compnent Re-Render");
  return (
    <div>
      <button >
        {props.buttonName}
      </button>
    </div>
  )
}

export default ChildComponent
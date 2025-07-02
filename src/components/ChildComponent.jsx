import React from 'react'

const  ChildComponent = React.memo(
  (props) => {
  console.log("Child Compnent Re-Render");
  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}
      </button>
    </div>
  )
}
)

export default ChildComponent

// So to avoid re-rendering we wrap this React.memo so the child compont wont render 
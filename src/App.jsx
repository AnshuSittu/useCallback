import { useState } from 'react'
import './App.css'
import ChildComponent from './components/childComponent'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1)
  }

  return (
    <>
     <div>
      Count: {count}
     </div>
     <div>
      <button onClick={handleClick}>Incremnt </button>
     </div>
     <br/>
     <div>
      <ChildComponent buttonName = "Click Me" />
     </div>
    </>
  )
}

export default App

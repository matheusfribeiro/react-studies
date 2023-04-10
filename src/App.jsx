import './App.css'
import { useState } from 'react'

function App() {
  const [textColor, setTextColor] = useState("black")
  const [count, setCount] = useState(0)

  
  
  return (
    <div className="App">
      <button onClick={() => {
        setTextColor( textColor === 'green' ? "red" : 'green')
      }}> Change Color</button>
      <h1 style={{color: textColor}}> Hi, my name is Matt</h1>

      <div>

        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Set to zero</button>
        <h1>{count}</h1>
      </div>
    </div>
  )
}




export default App

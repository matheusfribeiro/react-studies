import './App.css'
import { useCounter } from './components/useCounter'




function App() {
  const [counter, increaseCounter, decreaseCounter, resetCounter] = useCounter()

  return (
    <div className="App">
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
      <button onClick={resetCounter}>Reset</button>
      <h4>{counter}</h4>
      
      
    </div>
  )
}

export default App

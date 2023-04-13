import './App.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'




function App() {
  const [catFact, setCatFact] = useState("")
  useEffect(() => {
    fetchCatFact()
  }, [])

  
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then(response => {
    setCatFact(response.data.fact)
  })
  }

  const [name, setName] = useState("")
  const [age, setAge] = useState(null)

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then(response => {
      setAge(response.data)
    })
  }
  
  

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>

      <input type="text" placeholder='Ex. Matthew' onChange={(e) => setName(e.target.value)}/>
      <button onClick={fetchData}> Predict Age</button>
      <h3>Name: {age?.name} </h3>
      <h3>Predicted Age: {age?.age} </h3>
      <h3>Count: {age?.count} </h3>
    </div>
  )
}




export default App

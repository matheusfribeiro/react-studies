import './App.css'
import {User} from './User'

function App() {
  const users = [
    { name: "Matheus", age: 26 },
    { name: "Pedro", age: 21 },
    { name: "Bruno", age: 45 },
  ]
  
  return (
    <div className="App">
      {users.map((user, key) => {
        return <User key={key} name={user.name} age={user.age}/>
      })}
      
    </div>
  )
}




export default App

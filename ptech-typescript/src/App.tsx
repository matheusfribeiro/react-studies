import './App.css'
import { Person, Country } from './components/Person'

function App() {


  return (
    <div className="App">
      <Person 
        name="Matheus"
        email="matheus@email.com"
        age={21}
        isMarried={true}
        friends={["joao", "jose", "pedro", "ricardo"]}
        country={Country.Brazil}
      />
    </div>
  )
}

export default App

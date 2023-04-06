import './App.css'

function App() {
  const name = <h1>Peart</h1> // const name = <h1>Peart</h1> it is possible to store ui inside a variable
  const age = <h1>50</h1>
  const email = <h1>peart@email.com</h1>
  const user  = (
    <div>
      {name}
      {age}
      {email}
    </div>
  )
  return (
    <div className="App">
      
      <User name="Peart" age={50} email="peart@email.com" />
      <User name="Lee" age={60} email="Lee@email.com" />
      <User name="Lifeson" age={65} email="Lifeson@email.com" />

      <Job salary={9000} position="Senior" company="Amazon" />
      <Job salary={8000} position="mid-level" company="Facebook" />
      <Job salary={5500} position="Junior" company="Tesla" />
    </div>
  )
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  )
}

const Job = (props) => {
  return (
    <div>
      <label>Salary</label>
      <h2>{props.salary}</h2>
      <label>Position</label>
      <h2>{props.position}</h2>
      <label>Company</label>
      <h2>{props.company}</h2>
    </div>
  )
}

export default App

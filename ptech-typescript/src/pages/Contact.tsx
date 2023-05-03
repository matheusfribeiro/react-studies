import {Link} from 'react-router-dom'

export const Contact = () => {
  return (
    <div>
      <h1>Contacts</h1>
      {
        //nested routes
      }
      <p>
        <Link to="/contact/1">Forma de contato 1</Link>
      </p>
      <p>
        <Link to="/contact/2">Forma de contato 2</Link>
      </p>
      <p>
        <Link to="/contact/3">Forma de contato 3</Link>
      </p>
    </div>
  )
}
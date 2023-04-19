import PropTypes from 'prop-types'

export const Person = (props) => {
  

  

  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>email: {props.email}</h1>
      <h1>age: {props.age}</h1>
      <h1>This person {props.isMarried ? "is" : "is not"} MARRIED  </h1>
      {props.friends.map((friend, id) => <h1 key={id}>{friend}</h1>)}
    
    </div>
  )
}

Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friend: PropTypes.arrayOf(PropTypes.string),
}
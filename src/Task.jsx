export const Task = (props, key) => {
  return (
    <div key={key}>
      <h1 style={{color: "green"}}>{props.taskName}</h1>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
    </div> 
  )
}
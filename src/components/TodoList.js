import React, {useState} from 'react'


const TodoList = () => {
  let todosArr = [
    {
      'id': '1',
      'name': 'first',
      'complete': false
    },
    {
      'id': '2',
      'name': 'second',
      'complete': true
    }
  ]  

  const [name, setName] = useState('')
  const [todos, setTodos] = useState(todosArr)
  const [msg, setMsg] = useState('')
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState('')
  const [index, setIndex] = useState('')

  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!edit) {
      addTodo()
    } else {
      addTodo()
    }

    setName('')
    setEdit(false)
    setIndex('')
    setId('')
  
  }

  const addTodo = () => {
    if (edit) {
      todos[index] = {
        id,
        name
      }
    } else {
      const id = (todos.length+1).toString();
      let newTodo = {
        id,
        name
      }
      todos.push(newTodo)
    }
    
  }

  const delTodo = (index, id) => {
    console.log(index)
    todos.splice(index, 1)
    setMsg(id, 'Deleted')
  }


  const editTodo = (index, id) => {
    console.log('name', todos[index].name)
    setEdit(true)
    setId(id)
    setIndex(index)
    setName(todos[index].name)

  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex">
          <input 
            type="text" 
            className="form-control "
            placeholder="Add a new Todo"
            onChange={e => setName(e.target.value)}
            value={name}
            />
          </div>
          { !edit ? 
            <button 
            className="btn btn-dark">Add</button> : 
            <button 
            className="btn btn-dark" onClick={handleSubmit}>Edit</button>}
          
          
        
      </form>
      <div className="table-responsive">
      <table className="table table-borderless my-4">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
   
    {todos.map(todo =>
    <tr key={todo.id}>
      <th >{todos.indexOf(todo)+1}</th>
      <td >{todo.name}</td>
      <td ><button 
        className="btn btn-success"
        onClick={e => editTodo(todos.indexOf(todo), todo.id)}>Edit</button></td>
      <td ><button 
      className="btn btn-danger" 
      onClick={e => delTodo(todos.indexOf(todo), todo.id)}>Delete</button></td>
    </tr>
    )}
  </tbody>
</table>
</div>
    </div>
  )
}

export default TodoList

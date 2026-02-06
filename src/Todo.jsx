import { useState } from 'react'

function Todo() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = (e) => {
    if (e.key === 'Enter' && text.trim()) {
      setTodos([...todos, { text, done: false }])
      setText('')
    }
  }

  const toggleTodo = (index) => {
    const updated = [...todos]
    updated[index].done = !updated[index].done
    setTodos(updated)
  }

  return (
    <div style={{ padding: '40px' }}>
      <h2>Todo App</h2>

      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={addTodo}
      />

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <label>
              <input
                data-cy="todo-checkbox"
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(i)}
              />
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo

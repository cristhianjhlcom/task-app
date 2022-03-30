import { useState } from 'react'

export function TaskForm({ addTask }) {
  const [task, setTask] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const taskData = {
      id: crypto.randomUUID(),
      description: task,
      completed: false,
      created_at: new Date().toISOString(),
    }

    addTask(taskData)
  }

  function handleChange(e) {
    setTask(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="task">Task</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Add your description here"
          value={task}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

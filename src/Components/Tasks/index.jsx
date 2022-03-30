import { useState, useEffect } from 'react'
import { TaskList } from './TaskList'
import { TaskForm } from './TaskForm'
import styles from './styles.module.css'

export function Tasks() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getTasks()
  }, [])

  async function getTasks() {
    try {
      const res = await window.fetch('http://localhost:3001/tasks')
      const data = await res.json()
      setTasks(data)
    } catch (err) {
      console.error(err)
    }
  }

  async function addTask(taskData) {
    try {
      const res = await window.fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      })
      if (res.ok) {
        const data = await res.json()
        setTasks((prev) => [...prev, taskData])
        alert(`Your task with id ${data.id} was added successfully.`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.tasksContainer}>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  )
}

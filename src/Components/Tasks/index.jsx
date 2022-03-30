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
        setTasks((prev) => [taskData, ...prev])
        alert(`Your task with id ${data.id} was added successfully.`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteTask(taskId) {
    try {
      const result = window.confirm('Are you sure? this is permanent.')
      if (!result) return

      const res = await window.fetch(`http://localhost:3001/tasks/${taskId}`, {
        method: 'DELETE',
      })
      await res.json()
      setTasks(tasks.filter((task) => task.id !== taskId))
      alert(`Your task was deleted successfully.`)
    } catch (err) {
      console.error(err)
    }
  }

  async function updateTaskStatus(taskObject) {
    try {
      const taskData = {
        ...taskObject,
        completed: !taskObject.completed,
        updated_at: new Date().toISOString(),
      }
      const res = await window.fetch(
        `http://localhost:3001/tasks/${taskObject.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(taskData),
        }
      )
      const data = await res.json()
      setTasks(
        tasks.map((task) => {
          if (task.id !== data.id) {
            return task
          }

          return {
            ...task,
            completed: data.completed,
            updated_at: data.updated_at,
          }
        })
      )
      alert(`Your task with id ${data.id} was updated successfully.`)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={styles.tasksContainer}>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />
    </div>
  )
}

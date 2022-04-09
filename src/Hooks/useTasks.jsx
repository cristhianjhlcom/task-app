import { useEffect, useState } from 'react'
import http from '../Helpers/http'

export function useTasks() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getTasks()
  }, [])

  function getTasks() {
    http
      .get('/tasks')
      .then((data) => setTasks(data))
      .catch((err) => console.error(err))
  }

  function addTask(taskData) {
    http
      .post('/tasks', taskData)
      .then((data) => {
        setTasks((prev) => [data, ...prev])
        alert(`Your task with id ${data.id} was added successfully.`)
      })
      .catch((err) => console.error(err))
  }

  function deleteTask(taskId) {
    const message = 'Are you sure? this is permanent.'
    const result = window.confirm(message)
    if (!result) return

    http
      .kill('/tasks', taskId)
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== taskId))
        alert(`Your task was deleted successfully.`)
      })
      .catch((err) => console.error(err))
  }

  function changeTaskStatus(currentTask, newTask) {
    if (currentTask.id !== newTask.id) {
      return currentTask
    }

    return {
      ...newTask,
      completed: newTask.completed,
      updated_at: newTask.updated_at,
    }
  }

  function updateTaskStatus(taskObject) {
    const taskData = {
      ...taskObject,
      completed: !taskObject.completed,
      updated_at: new Date().toISOString(),
    }

    http
      .update('/tasks', taskObject.id, taskData)
      .then((data) => {
        setTasks(tasks.map((task) => changeTaskStatus(task, data)))
        alert(`Your task with id ${data.id} was updated successfully.`)
      })
      .catch((err) => console.error(err))
  }

  return {
    tasks,
    addTask,
    deleteTask,
    updateTaskStatus,
  }
}

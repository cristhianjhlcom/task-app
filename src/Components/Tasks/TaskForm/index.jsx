import { useContext, useState } from 'react'
import { Button } from '../../../Commons/Button'
import { FormControl } from '../../../Commons/FormControl'
import { TaskContext } from '../../../Context/TaskContext'
import styles from './styles.module.css'

export function TaskForm() {
  const [task, setTask] = useState('')
  const { addTask } = useContext(TaskContext)

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
    <form className={styles.taskForm} onSubmit={handleSubmit}>
      <FormControl task={task} handleChange={handleChange} />
      <div>
        <Button type="submit" color="primaryButton">
          Add
        </Button>
      </div>
    </form>
  )
}

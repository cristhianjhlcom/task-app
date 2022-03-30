import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { FormControl } from '../../Commons/FormControl'
import { Button } from '../../Commons/Button'

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

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
}

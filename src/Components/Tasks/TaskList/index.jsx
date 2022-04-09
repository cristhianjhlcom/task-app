import { useContext } from 'react'
import { TaskContext } from '../../../Context/TaskContext'
import { TaskItem } from '../TaskItem'
import styles from './styles.module.css'

export function TaskList() {
  const { tasks, updateTaskStatus, deleteTask } = useContext(TaskContext)
  return (
    <ul className={styles.tasksList}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
          task={task}
        />
      ))}
    </ul>
  )
}

TaskList.defaultProps = {
  tasks: [],
}

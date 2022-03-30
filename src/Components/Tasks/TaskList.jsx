import PropTypes from 'prop-types'
import { TaskListItem } from './TaskListItem'
import styles from './styles.module.css'

export function TaskList({ tasks, updateTaskStatus, deleteTask }) {
  return (
    <ul className={styles.tasksList}>
      {tasks.map((task) => (
        <TaskListItem
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

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTaskStatus: PropTypes.func.isRequired,
}

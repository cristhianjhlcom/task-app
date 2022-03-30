import PropTypes from 'prop-types'
import { TaskListItem } from './TaskListItem'
import styles from './styles.module.css'

export function TaskList({ tasks }) {
  return (
    <ul className={styles.tasksList}>
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </ul>
  )
}

TaskList.defaultProps = {
  tasks: [],
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
}

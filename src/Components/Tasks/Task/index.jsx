import PropTypes from 'prop-types'
import { TasksProvider } from '../../../Context/TaskContext'
import styles from './styles.module.css'

export function Task({ children }) {
  return (
    <div className={styles.tasksContainer}>
      <TasksProvider>{children}</TasksProvider>
    </div>
  )
}

Task.propTypes = {
  children: PropTypes.obj,
}

import PropTypes from 'prop-types'
import styles from './styles.module.css'

export function TaskListItem({ task }) {
  const { description, created_at } = task

  return (
    <li className={styles.taskListItem}>
      <button>Completo</button>
      <div>
        <h4 className={styles.taskItemTitle}>{description}</h4>
        <span>{created_at}</span>
      </div>
      <button>Borrar</button>
    </li>
  )
}

TaskListItem.propTypes = {
  task: PropTypes.object.isRequired,
}

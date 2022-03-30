import PropTypes from 'prop-types'
import { Button } from '../../Commons/Button'
import { dateForHumans } from '../../Helpers/date'
import styles from './styles.module.css'

export function TaskListItem({ task, updateTaskStatus, deleteTask }) {
  const {
    id,
    description,
    created_at: createdAt,
    updated_at: updatedAt,
    completed,
  } = task

  return (
    <li className={styles.taskListItem}>
      <div className={styles.taskListContent}>
        <Button color="primaryButton" onClick={() => updateTaskStatus(task)}>
          Completo ✅
        </Button>
        <div>
          <h4 className={styles.taskItemTitle}>{description}</h4>
        </div>
        <Button onClick={() => deleteTask(id)}>Borrar 🗑</Button>
      </div>
      <div className={styles.taskListTime}>
        <span>{`Created ${dateForHumans(createdAt)}`}</span>
        {completed && <span>{`Completed ${dateForHumans(updatedAt)}`}</span>}
      </div>
    </li>
  )
}

TaskListItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTaskStatus: PropTypes.func.isRequired,
}

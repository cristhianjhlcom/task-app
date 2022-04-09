import PropTypes from 'prop-types'
import { Button } from '../../../Commons/Button'
import { dateForHumans } from '../../../Helpers/date'
import styles from './styles.module.css'

export function TaskItem({ task, updateTaskStatus, deleteTask }) {
  const {
    id,
    description,
    created_at: createdAt,
    updated_at: updatedAt,
    completed,
  } = task

  const classFooterTime = completed
    ? `${styles.taskItemTitle} ${styles.footerCompleted}`
    : styles.taskListTime

  const classTitle = completed
    ? `${styles.taskItemTitle} ${styles.completed}`
    : styles.taskItemTitle

  const colorButton = completed ? 'defaultButton' : 'primaryButton'
  const classDangerButton = completed ? 'defaultButton' : 'dangerButton'

  return (
    <li className={styles.taskListItem}>
      <div className={styles.taskListContent}>
        <Button
          disabled={completed}
          color={colorButton}
          onClick={() => updateTaskStatus(task)}
        >
          Completed
        </Button>
        <div>
          <h4 className={classTitle}>{description}</h4>
        </div>
        <Button
          disabled={completed}
          color={classDangerButton}
          onClick={() => deleteTask(id)}
        >
          Borrar
        </Button>
      </div>
      <div className={classFooterTime}>
        <span>{`Created ${dateForHumans(createdAt)}`}</span>
        {completed && <span>{`Completed ${dateForHumans(updatedAt)}`}</span>}
      </div>
    </li>
  )
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTaskStatus: PropTypes.func.isRequired,
}

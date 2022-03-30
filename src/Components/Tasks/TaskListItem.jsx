import PropTypes from 'prop-types'
import { Button } from '../../Commons/Button'
import styles from './styles.module.css'

export function TaskListItem({ task }) {
  const { description, created_at: createdAt } = task

  return (
    <li className={styles.taskListItem}>
      <Button
        color="primaryButton"
        onClick={() => console.log('Boton de actualizar...')}
      >
        Completo ✅
      </Button>
      <div>
        <h4 className={styles.taskItemTitle}>{description}</h4>
        <span>{createdAt}</span>
      </div>
      <Button onClick={() => console.log('Boton de borrar...')}>
        Borrar 🗑
      </Button>
    </li>
  )
}

TaskListItem.propTypes = {
  task: PropTypes.object.isRequired,
}

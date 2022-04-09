import { useContext } from 'react'
import { TaskContext } from '../../../Context/TaskContext'
import styles from './styles.module.css'

export function TaskFooter() {
  const { tasks } = useContext(TaskContext)

  const completedTasks = tasks.filter((task) => task.completed === true)
  console.log(completedTasks)

  return (
    <footer className={styles.footer}>
      <p className={styles.footerItem}>
        Total of <strong>({tasks.length})</strong> tasks
      </p>
      <p className={styles.footerItem}>
        Tasks completed <strong>({completedTasks.length})</strong>
      </p>
    </footer>
  )
}

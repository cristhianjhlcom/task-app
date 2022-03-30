import PropTypes from 'prop-types'
import styles from './styles.module.css'

export function FormControl({ task, handleChange }) {
  return (
    <div className={styles.formControl}>
      <label className={styles.formLabel} htmlFor="task">
        Task
      </label>
      <input
        autoComplete="off"
        type="text"
        name="task"
        id="task"
        className={styles.formInput}
        placeholder="Add your description here"
        value={task}
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}

FormControl.propTypes = {
  task: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

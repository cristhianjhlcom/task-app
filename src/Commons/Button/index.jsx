import styles from './styles.module.css'
import PropTypes from 'prop-types'

export function Button({ children, onClick, color, type }) {
  const colorButton = `${styles.button} ${styles[color]}`
  return (
    <button type={type} className={colorButton} onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  onClick: () => {},
  color: 'defaultButton',
  type: 'button',
}

Button.propTypes = {
  children: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  type: PropTypes.string,
}

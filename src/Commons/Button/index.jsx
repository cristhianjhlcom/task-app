import PropTypes from 'prop-types'
import styles from './styles.module.css'

export function Button({ children, onClick, color, type, disabled }) {
  const colorButton = `${styles.button} ${styles[color]}`
  return (
    <button
      disabled={disabled}
      type={type}
      className={colorButton}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  onClick: () => {},
  color: 'defaultButton',
  type: 'button',
  disabled: false,
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
}

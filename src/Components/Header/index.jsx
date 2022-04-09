import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import styles from './styles.module.css'

export function Header() {
  const { site, firstName } = useContext(UserContext)
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h2>{site && site}</h2>
        <p>Hola, {firstName && firstName} que tal tu día?</p>
      </nav>
    </header>
  )
}

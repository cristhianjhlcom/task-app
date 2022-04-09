import PropTypes from 'prop-types'
import { createContext } from 'react'

export const UserContext = createContext({})

export function UserProvider({ children }) {
  return (
    <UserContext.Provider
      value={{
        site: 'Tasky',
        firstName: 'Matias',
        lastName: 'Pizzaro',
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.object,
}

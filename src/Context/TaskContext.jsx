import PropTypes from 'prop-types'
import { createContext } from 'react'
import { useTasks } from '../Hooks/useTasks'

export const TaskContext = createContext({})

export function TasksProvider({ children }) {
  const { tasks, addTask, deleteTask, updateTaskStatus } = useTasks()
  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, updateTaskStatus }}
    >
      {children}
    </TaskContext.Provider>
  )
}

TasksProvider.propTypes = {
  children: PropTypes.object,
}

import { Task as TaskHOC } from './task'
import { TaskFooter } from './TaskFooter'
import { TaskForm } from './TaskForm'
import { TaskItem } from './TaskItem'
import { TaskList } from './TaskList'

export { TaskFooter } from './TaskFooter'
export { TaskForm } from './TaskForm'
export { TaskItem } from './TaskItem'
export { TaskList } from './TaskList'

export const Task = Object.assign(TaskHOC, {
  Form: TaskForm,
  Item: TaskItem,
  List: TaskList,
  Footer: TaskFooter,
})

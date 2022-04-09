import { Header } from '../Components/Header'
import { Task } from '../Components/Tasks'
import { UserProvider } from '../Context/UserContext'
import '../Styles/main.css'

export function App() {
  return (
    <UserProvider>
      <Header />
      <Task>
        <Task.Form />
        <Task.List />
        <Task.Footer />
      </Task>
    </UserProvider>
  )
}

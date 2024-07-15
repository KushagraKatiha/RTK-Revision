import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <h1 className='bg-black text-white text-4xl text-center'>Redux ToolKit Revision</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App

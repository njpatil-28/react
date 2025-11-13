// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo.jsx'
import Todos from './components/Todos.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'  

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            📝 Redux Todo App
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Addtodo />
            <Todos />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App

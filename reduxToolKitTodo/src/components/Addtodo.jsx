import React from 'react'
import { addTodo } from '../features/todo/todoslice'
import { useDispatch } from 'react-redux'

function Addtodo() {

    const [input, setInput] = React.useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) =>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('')
    }

    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Todo</h2>
            <form onSubmit={addTodoHandler} className='flex gap-3'>
                <input 
                    type="text" 
                    name="todo" 
                    placeholder='Enter your todo...' 
                    className='flex-1 border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200'
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                />
                <button 
                    type="submit" 
                    className='bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                    disabled={!input.trim()}
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default Addtodo  

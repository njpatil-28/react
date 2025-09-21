import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoslice'


function Todos() {

    const todos = useSelector((state)=> state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Your Todos ({todos.length})
            </h2>
            {todos.length === 0 ? (
                <div className="text-center py-8">
                    <div className="text-6xl mb-4">📝</div>
                    <p className="text-gray-500 text-lg">No todos yet. Add one above!</p>
                </div>
            ) : (
                <ul className="space-y-3">
                    {todos.map((todo) => (
                        <li 
                            key={todo.id}
                            className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                        >
                            <span className="text-gray-800 flex-1 mr-4 break-words">
                                {todo.text}
                            </span>
                            <button
                                onClick={()=>{
                                    const newText = ("Update todo:", todo.text);
                                    if (newText !== null && newText.trim() !== "") {
                                        dispatch(updateTodo({id: todo.id, text: newText.trim()}));
                                    }
                                }}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors duration-200 text-sm font-medium flex items-center gap-1 mr-2"
                            >
                                ✏️ Edit
                            </button>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors duration-200 text-sm font-medium flex items-center gap-1"
                            >
                                🗑️ Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Todos

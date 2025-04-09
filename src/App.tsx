import {useState} from 'react'
import './App.css'
import TodoForm from "./components/Todo/TodoForm.tsx";
import TodoItem from "./components/Todo/TodoItem.tsx";
import {Task} from "./common/types";

function App() {
    const [todos, setTodos] = useState<Task[]>([])
    const addTask = (userInput: string) => {
        if (userInput) {
            const newTask: Task = {
                id: Date.now(),
                text: userInput,
                completed: false,
            }

            setTodos([...todos, newTask])
        }
    }
    const removeTask = (id: number) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }
    const toggleTask = (id: number) => {
        setTodos([...todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : {...todo})])
    }

    return (
        <>
            <div>
                <h1>Todo List</h1>
                <TodoForm addTask={addTask}/>
                {!!todos.length && <hr/>}
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} removeTask={removeTask} toggleTask={toggleTask}/>
                ))}
            </div>
        </>
    )
}

export default App

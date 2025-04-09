import React, {FormEvent, useState} from "react";

const TodoForm = ({addTask}: {
    addTask: (userInput: string) => void,
}) => {
    const [userInput, setUserInput] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value)
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a new task..." onChange={handleChange} value={userInput}/>
            <button>Add</button>
        </form>
    )
}

export default TodoForm

import React from 'react'
import '../../css/todo.css'

const TodoToggle = ({ showTodoCard, setShowTodoCard }) => {
    const onClick = () => {
        setShowTodoCard(!showTodoCard)
        console.log("You clicked the todo toggle")
        console.log(showTodoCard)
    }

    return (
        <div className="todo-toggle" onClick={onClick}>Todo</div>
    )
}

export default TodoToggle

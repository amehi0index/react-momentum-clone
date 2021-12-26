import React from 'react'
import '../../css/todo.css'

const TodoToggle = ({ showTodoCard, setShowTodoCard }) => {
    const onClick = () => {
        setShowTodoCard(!showTodoCard)
    }

    return (
        <div className="todo-toggle" onClick={onClick}>Todo</div>
    )
}

export default TodoToggle

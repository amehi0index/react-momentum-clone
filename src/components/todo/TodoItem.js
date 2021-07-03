import React from 'react'

const TodoItem = ({ todos, todo, isComplete, index, setTodos }) => {

    const completeTodo = () => {
        if(isComplete === false){
            todos[index].isComplete = true
        }
        else{
            todos[index].isComplete = false
        }
        setTodos([...todos])
        console.log(todos)
    }

    const deleteTodo = () => {
        todos.splice(index, 1)
        setTodos([...todos])
    }

    return (
        <div className="todo-div">
           <li className={isComplete ? 'todo-item-completed' : 'todo-item'}>{todo}</li>
            {todo && 
                <button className={isComplete ? 'complete-btn-show' : 'complete-btn'} onClick={completeTodo}>
                    <i className="fas fa-check"></i>
                </button>
            }
            {todo &&
                <button className="delete-btn" onClick={deleteTodo}>
                    <i className="fas fa-trash"></i>
                </button>
            }
        </div>
    )
}

export default TodoItem

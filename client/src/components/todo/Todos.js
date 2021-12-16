import React, { useState, useRef, useEffect } from 'react'
import TodoItem from './TodoItem'
import useUnsplashAPI from '../../hooks/useUnsplashAPI'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import tinycolor from 'tinycolor2'
import '../../css/todo.css'

const Todos = ({ showTodoCard }) => {

    const focusInput = useRef(null)

    const [imageData] = useUnsplashAPI()
    const [todos, setTodos] = useLocalStorage("todos",[{ item: "", isComplete: "false"}])
    const [inputValue, setInputValue] = useState("")
    const [showTodos, setShowTodos] = useState(false)
    
    /*const [todos, setTodos] = useState([
        {
          item: "",
          isComplete: "false"
        }
    ])*/

    const onSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { item: inputValue }])
        setInputValue("")
        console.log(todos)
    }

    const setTodoBtn = (color, url) => {  //imageData.color
        const img = document.createElement("img")
        let todoBtn = document.querySelector('.todo-btn-center')
        
        let clr = tinycolor(color);
        let isColorLight =  clr.isLight(); 
        let darkerColor = tinycolor(`${color}`).darken(10).toString(); 

            if(isColorLight){
                todoBtn.style.background = `${darkerColor}`
            }else{
                todoBtn.style.background = `${color}`
            }
    
        img.crossOrigin = 'Anonymous';
        img.src = `${url}`
    }

    const onClick = () => {
        setShowTodos(true)
       // focusInput.current.focus()
    }

    useEffect(() => {
        if(focusInput.current){
            focusInput.current.focus()
        }
        setTodoBtn(imageData.color, imageData.url)
      
    },[imageData.color, imageData.url, focusInput])

    return (
        <div div className={!showTodoCard ? 'todo-card-container hide' : 'todo-card-container'}>
            <h2>Today</h2>
            <div className={!showTodos ? 'todo-card-center': 'todo-card-center hide'} >
                <p>Add a todo to get started</p>
                <button className="todo-btn-center" onClick={onClick}>New Todo</button>
            </div>
            <div className={showTodos ? 'todos-container show' : 'todos-container'}>
                <ul className="todos-list">
                    {todos.map((todo, index) => (
                        <TodoItem  key={index} todo={todo.item}  isComplete={todo.isComplete} index={index} todos={todos} setTodos={setTodos}/>
                    ))} 
                </ul>
                    
                <form onSubmit={onSubmit}>
                    <input type="text" ref={focusInput} className="todo-input" placeholder="Enter New Todo" value={inputValue} onChange={(e) => setInputValue(e.target.value)} autoFocus />
                </form>
            </div>
        </div>
            
    )
}

export default Todos

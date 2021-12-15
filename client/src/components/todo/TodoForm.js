import React, { useEffect, useRef, useCallback } from 'react'

const TodoForm = ({ onSubmit, inputValue, setInputValue }) => {

    /*const focusInput = useRef(null)

    useEffect(() => {
        if(focusInput.current){
            focusInput.current.focus()
        }
    },[])*/

    const callbackRef = useCallback(focusInput => {
        if (focusInput ) {
            focusInput.focus();
        }
      }, []);

    return (
        <form onSubmit={onSubmit}>
            <input type="text"  ref={callbackRef} className="todo-input" placeholder="Enter New Todo" value={inputValue} onChange={(e) => setInputValue(e.target.value)} autoFocus />
        </form>
    )
}

export default TodoForm

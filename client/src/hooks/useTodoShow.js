import { useState } from 'react'

const useTodoShow = () => {
    
    const [showTodoCard, setShowTodoCard ] = useState(false)
    return [showTodoCard, setShowTodoCard]
    
}

export default useTodoShow

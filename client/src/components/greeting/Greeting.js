import React, { useState, useEffect, useRef } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import Moment from 'react-moment'
import '../../css/greeting.css'
import ContentEditable from 'react-contenteditable'

const Greeting = () => {

const [greeting, setGreeting] = useState("")
const [time, setTime] = useState(new Date())
const [focus, setFocus] = useLocalStorage("focus", "Learn all the things")

const nameRef = useRef();
const focusRef = useRef();
const[user, setUser] = useLocalStorage("username", "")

const [isFocusEmpty, setIsFocusEmpty] = useState(true)

    let salutation
    let today = new Date(),
    hour = today.getHours()

    if(hour < 12 ){
        salutation = 'Good morning,'
    }else if (hour < 18){
        salutation = 'Good afternoon,'
    }else{
        salutation = 'Good evening,'
    }

    //const stored = localStorage.getItem("user");

    useEffect(()=> {
        setTimeout( () => setTime(new Date()), 1000)
        setGreeting(salutation) 
    },[greeting, focus, user, time, salutation])
    
    const handleNameChange = (e) => {
        const html = e.target.value
        setUser(html)        
    }

    const handleFocusChange = (e) => {
        const html = e.target.value

        if(html === ""){
            setIsFocusEmpty(true)
        }else{
            setIsFocusEmpty(false)
        }
        setFocus(html)        
    }

    return (
        <div className="greeting-container">
             <Moment id="time" format="h:mm">{time}</Moment>
            <div className="greeting-content">
                <div className="greeting-limit">
                    <h1 className="greeting">{greeting}</h1>
                    <ContentEditable
                        innerRef={nameRef}
                        className="name"
                        html={user}
                        onChange={handleNameChange}
                    />
                    <span className={user ? 'punctuation show' : 'punctuation'}>.</span>
                </div>

                <h2 className="focus-q">What is your main focus today?</h2>
                <ContentEditable
                    innerRef={focusRef}
                    className={isFocusEmpty ? "focus show-line" : "focus"}
                    html={focus}
                    onChange={handleFocusChange}
                />
            </div>
            
        </div>
    )
}

export default Greeting

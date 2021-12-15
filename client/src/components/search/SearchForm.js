import React, { useState, useEffect, useRef } from 'react'
import SearchCard from './SearchCard'
import { Icon } from "@iconify/react"
import { useLocalStorage } from '../../hooks/useLocalStorage'
import googleIcon from "@iconify/icons-simple-icons/google"
import bingIcon from "@iconify/icons-simple-icons/bing"
import yahooIcon from "@iconify/icons-simple-icons/yahoo"
import '../../css/search.css'

const SearchForm = () => {
    const [showCard, setShowcard] = useState(false)
    const [showSearchForm, setShowSearchForm] = useState(false)
    const [btnValue, setBtnValue] = useState("")
 
    const [query, setQuery] = useState("")
    const [icon, setIcon] = useLocalStorage("icon", {}) 
    const [searchString, setSearchString] = useState("")
    const [formAction, setFormAction] = useState("")

    const clearInput = useRef(null)
   
    useEffect(()=> {
        getPriorSearch()
    },[])

    const handleSubmit = (e) => {
  
        if(localStorage.getItem('search') === '' || localStorage.getItem('search') === null){
            e.preventDefault()
            alert("Please select a search engine.")
            setShowSearchForm(true)
            return false;
        }
        console.log(clearInput.current.value)
    }

    const toggleForm = () =>{
        setShowSearchForm(!showSearchForm)
        if (showCard) setShowcard(false)
    }

    const getPriorSearch = () => {
            setSearchString(localStorage.getItem('search'))
            let searchURL =`${searchString}${query}`
            setFormAction(searchURL)
    }

    const onClick = (e) => {

        let searchURL
        let searchStr
        
        if(icon === googleIcon){
            setBtnValue(`form-engine-btn google`)
            searchStr = `http://www.google.com/search?q=`
            setSearchString(localStorage.setItem('search', searchStr))
            searchURL =`${searchStr}${query}`
            setFormAction(searchURL)
        } 
        else if(icon === yahooIcon){
            setBtnValue(`form-engine-btn yahoo`)
            searchStr = `http://www.yahoo.com/search?q=`
            setSearchString(localStorage.setItem('search', searchStr) )
            searchURL =`${searchStr}${query}`
            setFormAction(searchURL)
        } 
        else if(icon === bingIcon){
            setBtnValue(`form-engine-btn bing`)
            searchStr = `http://www.bing.com/search?q=`
            setSearchString(localStorage.setItem('search', searchStr))
            searchURL =`${searchStr}${query}`
            setFormAction(searchURL)
        } 
        else{
            getPriorSearch()
        }
    }

    return (
        <div className="search-container">
            <div className="search-form-container">
                <div className="search-title">
                    <p>Links</p>
                    <span className="search-icon"><i className="fas fa-search" onClick={toggleForm}></i></span>
                </div>
            
                <form action ={formAction}  method = "GET" className={showSearchForm ? 'search-form show' : 'search-form'} onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        ref={clearInput} 
                        className="search-input" 
                        name= "q" value={query} 
                        placeholder="" 
                        onChange={(e)=>setQuery(e.target.value)}
                        autoComplete="off"
                    />
                    <span className="search-arrow">
                        <button 
                            type="submit" 
                            className="search-submit-btn" 
                            onClick={onClick}><Icon className={btnValue} 
                            icon={icon} 
                        /></button>
                        <i className="arrow down"  onClick={()=>setShowcard(!showCard)}></i>
                    </span>
                </form>
            </div>
            {showCard && <SearchCard setBtnValue={setBtnValue} setIcon={setIcon}/>}
        </div>
    )
}

export default SearchForm

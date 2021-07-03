import React from 'react'
import { Icon } from "@iconify/react"
import googleIcon from "@iconify/icons-simple-icons/google"
import bingIcon from "@iconify/icons-simple-icons/bing"
import yahooIcon from "@iconify/icons-simple-icons/yahoo"
import useComponentVisible from '../../hooks/useComponentVisible'
import '../../css/search.css'

const SearchCard = ({ setIcon }) => {

    const { ref, isComponentVisible } = useComponentVisible(true)

    return (
       <> 
            {isComponentVisible && <div ref={ref} class="search-links-card ">
                <ul class="search-links-list">
                    <p>Search With</p>
                    <li className="link google" onClick={()=> setIcon(googleIcon)}><Icon className="google" data-icon="simple-icons:google" icon={googleIcon} /><span>Google</span></li>
                    <li className="link yahoo" onClick={()=> setIcon(yahooIcon)}><Icon className= "yahoo" data-icon="simple-icons:yahoo" icon={yahooIcon} /><span>Yahoo</span></li>
                    <li className="link google" onClick={()=> setIcon(bingIcon)}><Icon className= "bing" data-icon="simple-icons:bing" icon={bingIcon} /><span>Bing</span></li>
                </ul>
            </div>}
        </>
    )
}

export default SearchCard

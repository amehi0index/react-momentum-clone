import React, { useState } from 'react'
import useUnsplashAPI from '../../hooks/useUnsplashAPI'
import '../../css/location.css'

const ImageLocation = () => {

    const [imageData] = useUnsplashAPI()

    const [isLiked, setIsLiked] = useState (false)

    const setImageLocation = (location) => {

        const { city, country} = location
        let imageLocation
        
        if (city === null && country === null){
            return imageLocation = 'Somewhere, Universe'
        }
        else if(city === null){
            return imageLocation = `${country}`
        }
        else if(country === null){
            return imageLocation = `${city}`
        }
        else{
           return imageLocation = `${city}, ${country}`
        }
    }

    const imageLocation = setImageLocation(imageData.location)

    return (
        <div className="geo-container">
            <div className="image-credit">
                <a href={imageData.links}  className="image-photographer">{imageData.user}</a>
                <span className="image-like" onClick={()=>setIsLiked(!isLiked)}><i className={!isLiked ? 'far fa-heart' : 'fas fa-heart'}></i></span>
            </div>
            <div className="image-location">{imageLocation}</div>
        </div>
    )
}

export default ImageLocation

import { useState, useEffect } from 'react'
import axios from 'axios'

const useUnsplashAPI = () => {

    const setTerm = () => {
        let term
        const today = new Date(),
         hour = today.getHours()
        
        if(hour < 12 ){
             term = `morning sun`
        }else if(hour < 18){
            term = `green forest`
        }else{
            term = `starry night sky`
        }
        return term
    }

    const searchTerm = setTerm()

    const imageURL = `/api/background?query=${searchTerm}&per_page=1&orientation=landscape`

    const [imageData, setImageData ] = useState({
        url: "",
        location: {},
        user: "",
        links: "",
        liked_by_user: false,
        color: ""
    })

    useEffect(() => {

        async function getImages(){
            const response = await axios.get(imageURL)
            const { urls, location, user, links, liked_by_user, color } = await response.data
    
            setImageData({
                url: urls.regular,
                location: location,
                user: user.name,
                links: links.html,
                liked_by_user:false,
                color: color
            })
        }
        getImages()

    }, [imageData.user, imageData.url, imageURL])
    
    return [imageData]
}

export default useUnsplashAPI

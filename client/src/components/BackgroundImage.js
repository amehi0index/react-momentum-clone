
import useUnsplashAPI from '../hooks/useUnsplashAPI'

const BackgroundImage = () => {

    const [ imageData ] = useUnsplashAPI()

    function setBg(url){
        let today = new Date(),
        hour = today.getHours()
    
        if(hour){
            document.body.style.backgroundImage = `url(${url})`
            document.body.style.backgroundRepeat = "no-repeat"
            document.body.style.backgroundAttachment= "fixed"
            document.body.style.backgroundPosition= "center"
            document.body.style.backgroundSize = "cover"
        }
    }

    if(!imageData.loading){
        setBg(imageData.url)
    }

    return (
        <div></div>
    )
}

export default BackgroundImage

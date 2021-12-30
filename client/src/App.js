

import React, { useState, useEffect } from 'react'
import Loader from "react-loader-spinner"
import ContainerOverlay from './components/ContainerOverlay'
import BackgroundImage from './components/BackgroundImage'
import useTodoShow from './hooks/useTodoShow'
import useUnsplashAPI from './hooks/useUnsplashAPI'

const App = () => {
  const [showTodoCard, setShowTodoCard] = useTodoShow()
  const [ imageData ] = useUnsplashAPI()
  const [ loading, setLoading ] = useState(true)
 
  useEffect(() => {
    if (imageData.loading === false){
      setLoading(false)
    } 
  }, [imageData.loading])

  return (
    <>
      {loading 
        ?  <div className="loader-container">
            <Loader
              className="loader"
              type="ThreeDots"
              color="#ffff"
              height={150}
              width={150}
            /> 
          </div>
        : <>
            <BackgroundImage/>
            <ContainerOverlay showTodoCard={showTodoCard} setShowTodoCard={setShowTodoCard} />
          </>
      }
    </>
  )
}

export default App


import ContainerOverlay from './components/ContainerOverlay'
import BackgroundImage from './components/BackgroundImage'
import useTodoShow from './hooks/useTodoShow'

const App = () => {
  const [showTodoCard, setShowTodoCard] = useTodoShow()
  return (
    <>
      <BackgroundImage />
      <ContainerOverlay showTodoCard={showTodoCard} setShowTodoCard={setShowTodoCard} />
    </>
  )
}

export default App

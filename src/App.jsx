import { Body } from "./assets/Body"
import { Carrousel } from "./components/Carrousel"

export const App = () => {
  // const [count, setCount] = useState(0)
  return (
      <div>
        <div className="title d-flex justify-content-center ">
          <h1>Bienvenidos a FUEGO Y SAZÓN</h1>
        </div>
        <Carrousel/>
        <Body/>
      </div>
  )
}
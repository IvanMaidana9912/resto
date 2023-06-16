import { Body } from "./assets/Body"
import { Carrousel } from "./components/Carrousel"

export const App = () => {
  // const [count, setCount] = useState(0)
  return (
      <div>
        <div className="title d-flex justify-content-center imgLogo {
">
          <h1 className="text-light">Bienvenidos a FUEGO Y SAZÓN</h1>
        </div>
        <Carrousel/>
        <Body/>
      </div>
  )
}
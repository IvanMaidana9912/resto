import { Body } from "./assets/Body";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page } from "./pages/catalog/pageEjample";
import { Error404 } from "./pages/Error404";
import dataItems from "../bbdd/data.json";

const cantidadMaximoProductos = Object.entries(dataItems).length;
const cantidadMinimoProductos = 1;

export const App = () => {
  // const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path={"/"} element={< Body />} />
          <Route exact path={"/categoria/:id"} element={<Page />} />
          <Route exact path={`/item/:id`} element={<Page />} />
          <Route path={"*"} element={<Error404 />} />;
        </Routes>
      </div>
    </BrowserRouter>
  )
}
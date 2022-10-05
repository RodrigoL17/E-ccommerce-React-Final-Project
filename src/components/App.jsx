import { BrowserRouter, Routes, Route} from "react-router-dom";
import "../styles/scss/App.scss"
import "../styles/scss/card.scss"
import "../styles/scss/card-detalle.scss"
import Navbar from "./content/navbar";
import About from "./content/about";
import Carrito from "./content/carrito";
import Contacto from "./content/contacto";
import ListItemContainer from "./content/list-item-container";
import DetailItem from "./content/detail-item";
import Categoria from "./content/category";



function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<ListItemContainer/>} path="/"/>
        <Route element={<About/>} path="/About"/>
        <Route element={<Contacto/>} path="/Contacto"/>
        <Route element={<Carrito/>} path="/Carrito"/>
        <Route element={<DetailItem/>} path="/Producto/:id"/>
        <Route element={<Categoria/>} path="/Categorias/:categoria"/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

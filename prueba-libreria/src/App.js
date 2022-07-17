import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/container/ItemListContainer/ItemListContainer";
import { Cart } from "./components/container/Cart/Cart";
import { ItemDetailContainer } from "./components/container/ItemDetailContainer/ItemDetailContainer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  // const getFetchApi =(url) => {
  //   fetch(url)
  //   .then(resp => resp.json())
  //   .then(data => console.table(data.results))
  //   .catch(err => console.log(err))
  // }

  // useEffect(()=> {
  //   const url = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10"
  //   getFetchApi(url)
  // }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index path='/' element={<ItemListContainer saludos={"Productos"} />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer saludos={"Productos"} />} />
          <Route path='/detalle/:detailsId' element={<ItemDetailContainer/>} />
          <Route path='/carrito' element={<Cart />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

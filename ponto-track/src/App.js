import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './components/list/ItemList';
import ItemDetail from './components/details/ItemDetail';
import ItemForm from './components/forms/ItemForm';
import EstiloGlobal from './styles/index'

function App() {
  return (
    <div className="App">
      <EstiloGlobal />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ItemList />} />
          <Route path="/items/:id" element={<ItemDetail />} />
          <Route path="/create" element={<ItemForm />} />
          <Route path="/edit/:id" element={<ItemForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

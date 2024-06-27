import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './components/list/ItemList';
import ItemDetail from './components/details/ItemDetail';
import ItemForm from './components/forms/ItemForm';
import EstiloGlobal from './styles/index';

function App() {
  return (
    <div className="App">
      <EstiloGlobal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemForm />} /> 
          <Route path="/items/:id" element={<ItemDetail />} />
          <Route path="/create" element={<ItemForm />} />
          <Route path="/edit/:id" element={<ItemForm />} />
          <Route path="/list" element={<ItemList />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

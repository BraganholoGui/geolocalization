import { configureStore } from '@reduxjs/toolkit';
// import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens';
import itens from './reducers/itens';
// import carrinhoSlice from './reducers/carrinho';
// import buscaSlice from './reducers/busca';

const store = configureStore({
  reducer: {
    itens:itensSlice
  }
});

export default store;
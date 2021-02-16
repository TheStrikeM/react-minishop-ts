import React from 'react'
import './app.sass'
import {useDispatch} from 'react-redux'
import Main from './components/main/Main'
import { addItem, deleteItem } from './actions/cart'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Cart from './components/cart/Cart'

function App() {


  const dispatch = useDispatch()

  const onAdd = (name: string, price: number, isArchive: boolean) => {
    const result = {name, price, isArchive}
    dispatch(addItem({name, price, isArchive}))
  }

  const onDelete = (name: string, price: number) => {
    dispatch(deleteItem({name, price}))
  }

  return (
    <div className="app">
      <Router>

        <div className="links">
          <Link to="/">Главное</Link>
          <Link to="/cart">Корзина</Link>
        </div>

        <Route exact path="/">
          <Main dispatch={dispatch} onAdd={(name: string, price: number, isArchive: boolean) => {
              onAdd(name, price, isArchive)
          }} />
        </Route>

        <Route exact path="/cart">
          <Cart onDelete={onDelete} />
        </Route>
        
      </Router>
    </div>
  );
}

export default App;

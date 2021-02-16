import React from 'react'
import './app.scss'
import {useDispatch} from 'react-redux'
import Main from './components/main/Main'
import { addItem } from './actions/cart'

function App() {

  const dispatch = useDispatch()

  const onAdd = (name: string, price: number, isArchive: boolean) => {
    const result = {name, price, isArchive}
    dispatch(addItem({name, price, isArchive}))
  }

  return (
    <div className="app">
      <Main dispatch={dispatch} onAdd={(name: string, price: number, isArchive: boolean) => {
          onAdd(name, price, isArchive)
      }} />
    </div>
  );
}

export default App;

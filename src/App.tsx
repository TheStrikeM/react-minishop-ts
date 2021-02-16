import React from 'react';
import './app.scss';
import store from './store'
import {Provider} from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <div className="app">
        
      </div>
    </Provider>
  );
}

export default App;

import React from 'react'
import './App.css';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { store } from './store';
import { spacexApi } from './services/spacexdata';
import Data from './components/Data';

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={spacexApi}>
        <div className="App">
          <Data />
        </div>
      </ApiProvider>
    </Provider>
  );
}

export default App;

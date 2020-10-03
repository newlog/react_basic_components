import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './components/MainComponent'

function App() {
  return (
    <BrowserRouter>
      <div>
        <CssBaseline />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;

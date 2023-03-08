import React from 'react';
import './app.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import NotesPage from './pages/NotesPage/NotesPage';

const App = () => {

  return (
    <div>

      <BrowserRouter>

        <Routes>
          <Route path="/SecondBrainApp/" element={<HomePage />} />
          <Route path="/SecondBrainApp/:id" element={<NotesPage />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App;
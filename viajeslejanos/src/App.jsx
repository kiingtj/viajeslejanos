import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

const Inicio = lazy(() => import('./pages/Inicio'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Inicio />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  )
}

export default App

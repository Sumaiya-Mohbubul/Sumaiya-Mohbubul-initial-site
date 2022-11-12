import React, { useRef } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routes from './components/routes/Routes';

import TimeAgo from 'javascript-time-ago';

const en = require('javascript-time-ago/locale/en.json');

TimeAgo.addDefaultLocale(en);


function App() {
  const parentRef = useRef<HTMLElement>(null);
  
  return (
    <BrowserRouter>
      <main ref={parentRef} className="d-flex flex-column">
        <Navbar />
          <div className="container-fluid p-0 flex-grow-1 h-auto">
            <React.Suspense fallback={null}>
              <Routes />
            </React.Suspense>
          </div>
        <Footer id="footer" />
      </main>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Header from 'components/Header';

function App() {
  return (
    <div className="App">
      <Header className="mx-24 my-12 flex justify-between" />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;

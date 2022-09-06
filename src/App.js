import React from 'react'
import Home from './Components/Home';
import Landing from './Components/Landing';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';



function App() {
  return (
    <BrowserRouter>
      <div>
        <AnimatePresence exitBeforeEnter >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/game" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;

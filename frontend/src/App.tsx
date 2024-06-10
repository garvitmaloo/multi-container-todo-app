import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewTodo from "./pages/NewTodo";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<NewTodo />} />
    </Routes>
  );
}

export default App;

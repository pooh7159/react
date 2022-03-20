import { useEffect, useState } from "react";
import {Route, Routes } from "react-router-dom";
import Movie from "./components/Movie";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  )
}
export default App;
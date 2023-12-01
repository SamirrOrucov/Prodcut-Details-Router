import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import MainLayout from "./layouts/MainLayout";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />

      <Route path="/detail/:id" element={<Detail/>} />
      <Route path="/contact" element={<Contact/>} />


      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App

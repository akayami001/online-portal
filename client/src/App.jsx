import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "../src/pages/Login";
import HomePage from "../src/pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;

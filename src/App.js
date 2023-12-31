import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilteredProducts from "./components/FiteredProducts/FilteredProducts";
import SingleProduct from "./components/FiteredProducts/SingleProduct";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.auth.user);
  const { authUser } = user;
  console.log("user", user);
  console.log("authUser", authUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={authUser ? <Main /> : <Login />} />
          {/* <Route path="/login" element={authUser ? <Main /> : <Login />} /> */}
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />}
          />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

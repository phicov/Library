import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([])
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} />} />
          <Route path="/cart" element={<Cart books={books} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";

function App() {
  return (
    <div>
      <Nav />
      <Landing />
      <Highlights />
    </div>
  );
}

export default App;

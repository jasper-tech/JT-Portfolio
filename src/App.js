import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import ScreenLayout from "./pages/layout";
import NavBar from "./components/navbar";
import HomePage from "./pages/homepage";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          <Route path="/" element={<ScreenLayout />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;

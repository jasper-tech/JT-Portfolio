import React, { FC } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Layout from "./pages/layout";
import HomePage from "./pages/homepage";
import CV from "./pages/cv";
import ContactMe from "./pages/contactme";

const App: FC = () => {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="cv" element={<CV />} />
            <Route path="contact" element={<ContactMe />} />
          </Route>
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;

import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}

      <div className="app__body">
        {/* SideBar */}

        <Sidebar />
      </div>

      {/* Feed */}

      {/* Widgets */}
    </div>
  );
}

export default App;

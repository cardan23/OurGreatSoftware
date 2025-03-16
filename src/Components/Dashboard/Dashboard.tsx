import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6 ml-64">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
import React from "react";
import { Outlet } from "react-router-dom";
import './MainLayout.css';


export default function MainLayout() {
  return (
    <>
      <div className="navbar">Ola mundo</div>
      <Outlet />
      <footer className="footer">Footer</footer>
    </>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {

  return (
    <header>
      <h1>Sellerhub</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/myapp">Myapp</NavLink>
    </header>
  )
}
import React from 'react'
import { Link } from "react-router-dom";
import { FaHome, FaCalendarPlus, FaTable } from "react-icons/fa";

const Menu = () => (
  <nav className="menu">
    <Link to="/" activeClassNAme="selected">
      <FaHome />
    </Link>
    <Link to="/add-day" activeClassNAme="selected">
      <FaCalendarPlus />
    </Link>
    <Link to="/list-days" activeClassNAme="selected">
      <FaTable />
    </Link>
  </nav>
);

export default Menu;

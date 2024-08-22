import React from "react";
import { Link } from "react-router-dom";

export default function Card({ title, link,  ...props }) {
  return (
    <Link to={link}>
      <div className="cards" {...props}>
        <h3>{title}</h3>
      </div>
    </Link>
  );
}

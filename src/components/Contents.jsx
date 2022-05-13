import React, { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Content from "./Content";

export default function Contents({ data }) {
  return (
    <div>
      {data.map((e, i) => (
        <Link key={i} to={`${e}`}>
          {e}
        </Link>
      ))}
      <Outlet />
    </div>
  );
}

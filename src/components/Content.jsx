import React from "react";
import { Outlet } from "react-router";

export default function Content({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <Outlet />
    </div>
  );
}

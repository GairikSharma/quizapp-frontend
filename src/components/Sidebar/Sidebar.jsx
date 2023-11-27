import React from "react";
import "./Sidebar.css";
import { data } from "../../demodata";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3 className="topics-heading">Topics</h3>
      {data.map((topic) => {
        return <button className="topic">{topic}</button>;
      })}
    </div>
  );
}

export default Sidebar;

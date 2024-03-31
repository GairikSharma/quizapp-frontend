import React, { useContext } from "react";
import "./Sidebar.css";
import { data } from "../../demodata";
import { GlobalContext } from "../../GlobalContext";

function Sidebar() {
  const {setTopic} = useContext(GlobalContext)
  return (
    <div className="sidebar">
      <h3 className="topics-heading">Topics</h3>
      {/* {data.map((topic) => {
        return <button className="topic">{topic}</button>;
      })} */}
      <button onClick={(e) => setTopic("quantitative-aptitude")} className="topic"> Quants </button>
      <button onClick={(e) => setTopic("verbal")} className="topic"> Verbal </button>
      <button onClick={(e) => setTopic("oop")} className="topic"> OOP </button>
      <button onClick={(e) => setTopic("dbms")} className="topic"> DBMS </button>
      <button onClick={(e) => setTopic("dsa")} className="topic"> DSA </button>
      <button onClick={(e) => setTopic("computer-networks")} className="topic"> CN </button>
    </div>
  );
}

export default Sidebar;

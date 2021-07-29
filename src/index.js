import React from "react";
import ReactDOM from "react-dom";
import Gate from "./gate";
import "./index.css";
import MediaCard from "./mediaCard";

ReactDOM.render(
  <div>
  <MediaCard {...{title:"My Page", body:"Hello how are you", imageUrl:"https://source.unsplash.com/daily"}} />
  <Gate isOpen={true} />
  </div>,
  
  document.getElementById("root")
);


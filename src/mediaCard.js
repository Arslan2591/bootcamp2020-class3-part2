import React from "react";

const MediaCard = (props) => {
  return <div>
    <h2>{props.title}</h2>
    <p>{props.body}</p>
    <img src={props.imageUrl} alt="" />
  </div>;
};


export default MediaCard;

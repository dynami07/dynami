import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li className="centertext">
        <br>
        {props.text} </li>
    </div>
  );
}

export default ToDoItem;

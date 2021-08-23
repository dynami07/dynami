import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>
        {props.text} <p className="dipslay">{props.display}</p>
    </li>
    </div>
  );
}

export default ToDoItem;

import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>
        {props.text} <bold> {props.display} </bold>
    </li>
    </div>
  );
}

export default ToDoItem;

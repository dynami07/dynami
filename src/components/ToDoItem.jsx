import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>
        {props.text}
         
        <h4>{props.display}</h4>
    </li>
    </div>
  );
}

export default ToDoItem;

import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>
        {props.text}                                               {props.display}
    </li>
    </div>
  );
}

export default ToDoItem;

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
       <h5 className="dipslay">{props.display}</h5>
    </li>
    </div>
  );
}

export default ToDoItem;

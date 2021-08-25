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
        <bold className="display"> {props.display}  {props.show} </bold>   
    </li>
    </div>
  );
}

export default ToDoItem;

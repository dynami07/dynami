import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
	  let gender=["Male","Female"];
const [displayGender,setGender]=useState();

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  

  
  return (
    <div className="form">
    <span>Input Text</span>
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.addItem(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
  <div>
		<center>
		{gender.map(result=>(
			<>
			<input type="radio" value={result} name="radiovalues" onChange={(e)=>setGender(e.target.value)}/>
			<b> {result} </b>
			</>
			))}
			</center>
	</div>
    </div>
  );
}

export default InputArea;

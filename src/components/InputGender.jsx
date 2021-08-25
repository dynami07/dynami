import React, { useState } from "react";

function InputGender(props) {
  const [inputGender, setInputGender] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputGender(newValue);
  }
  
  return (
	<div>
		<center>
		{inputGender.map(result=>(
			<>
			<input type="radio" value={result} name="radiovalues"  onChange={handleChange} />
			<b> {result} </b>
			</>
			))}
			</center>
	</div>

  );
}

export default InputGender;

import React, { useState } from "react";

function InputGender(props) {
  const [inputGender, setGender] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setGender(newValue);
  }
  
  return (
    <div>
      <input type="radio" value="Male" name="gender" />Male
      <input type="radio" value="Female" name="gender" />Female
    </div>
  );
}

export default InputGender;

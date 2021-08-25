import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import './switcher.scss';
export default App;

function App() {
const [items, setItems] = useState([]);

function addItem(inputText) {
setItems(prevItems => {
  return [...prevItems, inputText];
  });
 }  

const [ colorTheme, setColorTheme]= useState('theme-white');

  useEffect(() => {
	const currentThemeColor = localStorage.getItem('theme-color');
	if(currentThemeColor)
	{
	  setColorTheme(currentThemeColor);
	}
}, []);

  const handleClick= (theme) => {
	setColorTheme(theme);
	localStorage.setItem('theme-color',theme)
  } 
 

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

function handleChange= (event) => {
    this.setState({
      selectedoptionId : event.target.value
    })
    tempobj["optionId"] = event.target.value
  };
	
return (
	  
	<div className={`App ${colorTheme}`}>
	<div className= 'theme-options'>

	  <div id ='theme-white'
		onClick={() => handleClick('theme-white')}
		className={`${colorTheme === 'theme-white' ? 'active' : ''}`}	  
	  />
	  <div id ='theme-blue'
		onClick={() => handleClick('theme-blue')}
	 	className={`${colorTheme === 'theme-blue' ? 'active' : ''}`}
	  />
          <div id ='theme-orange'
		onClick={() => handleClick('theme-orange')}
		className={`${colorTheme === 'theme-orange' ? 'active' : ''}`}
	  />
          <div id ='theme-purple'
		onClick={() => handleClick('theme-purple')}
		className={`${colorTheme === 'theme-purple' ? 'active' : ''}`}
	  />
	  <div id ='theme-green'
		onClick={() => handleClick('theme-green')}
		className={`${colorTheme === 'theme-green' ? 'active' : ''}`}
	  />
	  <div id ='theme-black'
		onClick={() => handleClick('theme-black')}
		className={`${colorTheme === 'theme-black' ? 'active' : ''}`}
	  />
	</div>
	
	<div className= 'content-box'>
	<h3> To-Do List</h3>
	</div>

    <div className="container">
      <InputArea addItem={addItem} />
      
      <div>
   <form>
<fieldset id="group1">
<input type="radio" value="value1" name="group1" onChange={this.handleChangea}/>
<input type="radio" value="value2" name="group1" onChange={this.handleChangea}/>
</fieldset>

<fieldset id="group2">
<input type="radio" value="value1" name="group2" onChange={this.handleChangeb}/>
<input type="radio" value="value2" name="group2" onChange={this.handleChangeb}/>
<input type="radio" value="value3" name="group2" onChange={this.handleChangeb}/>
</fieldset>
</form>
      </div>
      
      <div>
         <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
	      onChecked={deleteItem}
            />
	   ))}
	  </ul> 
      </div>
      
   
     </div>
</div>
  );
}

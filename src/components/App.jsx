import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import './switcher.scss';
export default App;

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
	 						   const allInputData = { id: new Date().getTime().toString() , name:inputText}
      return [...prevItems, allInputData];
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
	
    /*const editItem = (id) => {

        let newEditItem = items.find((elem) => {
            return elem.id === id;
        })
        console.log(newEditItem.name);

       

        setInputData(newEditItem.name);
        setIsEditItem(id);

    }*/

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
      
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index.id}
              id={index}
              text={todoItem.name}
              onChecked={deleteItem}
            />
          ))}
	  </ul>
	  <div className= 'todo-btn'>
                <i className="far fa-edit add-btn" title="Edit item" onClick={() => todoItem(todoItem.name)}></i>
               </div>
      
   </div>
</div>
    </div>
  );
}

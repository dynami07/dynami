import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import './switcher.scss';

import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './lang/en';
import de from './lang/de';

export default App;



counterpart.registerTranslations('en', en);
counterpart.registerTranslations('de', de);
counterpart.setLocale('en');

const Link = (props) => {
  return (
    <Translate
      content={props.content}
      component="a"
      href="//google.com"
      target="_blank"
    />
  )
}

class Appp extends Component {

  state = {
    lang: 'en'
  }

  onLangChange = (e) => {
    this.setState({lang: e.target.value});
    counterpart.setLocale(e.target.value);
  }

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
	
	
  <div className="App">

        <select value={this.state.lang} onChange={this.onLangChange}>
          <option value="en">EN</option>
          <option value="de">DE</option>
        </select>

        <Translate content="title" component="h1" className="class"/>

        <Translate content="copy.p1" component="p" unsafe={true}/>

        <Translate content="copy.p2" component="p" with={{ link }}/>

        <Translate component="input" type="text" attributes={{placeholder: 'placeholder'}}/>
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

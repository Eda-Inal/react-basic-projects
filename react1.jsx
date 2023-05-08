import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const handlerClick = (e) => {
    e.preventDefault();
    if(input != ""){
      setList([...list,input])
    console.log(list);
    setInput("")
    }
   

  }
  const handleClose = (index) => {
    const newList = [...list]; // Make a copy of the list
    newList.splice(index, 1); // Remove the item at the given index
    setList(newList); // Update the state with the new list
  }
 const deleteAll = () =>{
  setList([]);
 }

  return (
    <div className='x'>
      <h1>Shopping List</h1>
      <div className="App">
<h2>Items To Buy</h2>
      <input 
      type="text" 
      className='demo' 
      placeholder='Add a new item' 
      value={input}
      onChange={(e) => setInput(e.target.value) }
      />
      <button className='btn'
      onClick= {handlerClick}
      
      >Add</button>

      <button className='btn' onClick={deleteAll}>Reset</button>


      <ul  className="list">
        
       {list.map((item ,index) => (
        <li  key={index}>{item} <button className='close' onClick={() => handleClose(index)}>X</button> </li>
       ))}
      </ul>

      </div>
    
    </div>

    
  );
}

export default App;

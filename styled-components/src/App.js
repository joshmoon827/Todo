
import './App.css';
import { useState } from 'react';
import * as L from "./AppStyle";


function App() {
 
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])
  const onChange = (event)=> setToDo(event.target.value)
  const onDelete = (index) => {
    setToDos((prevToDos) => prevToDos.filter((_, i) => i !== index));
  };
  const onSubmit = (event)=> {
    event.preventDefault()// 새로고침을 막기 위해
    // console.log(toDo)
    if(toDo===""){
      return;
    }
    setToDos((arr)=>[toDo,...arr])// 아래처럼 비어있는 값을 보내 줄 수 있지만,
    // 함수를 값으로 보내 줄 수 도 있다.
    setToDo("")
    
  }
  console.log(toDos)
  console.log(toDos.map((item,index)=>(<li key={index}>{item.toUpperCase()}</li>)))
  // console.log(toDo)
  return (
    <div className="App">
      <h1>To do list({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type='text'
          placeholder='뭘할까?'
        ></input>
        <button>Add todo</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item,index)=>(
          <div>
            <L.li key={index}>
              {item.toUpperCase()}
              <L.button onClick={() => onDelete(index)}>x</L.button>
            </L.li>
            
          </div>
        ))}
      </ul>
      
      
    </div>
  );
}

export default App;

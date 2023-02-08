import logo from './logo.svg';
import './App.css';
import Status from './components/status.js';
import Table from './components/table.js';
import { useEffect,useState } from 'react';
import Input from './components/input.js';

function App() {
  const[todos,setTodos]=useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/todos").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes => setTodos(jsonRes))
  })

  

  return (
    <div className="App">
    <Status/>
    <Table todos={todos}/>
    <Input/>
    </div>
  );
}

export default App;

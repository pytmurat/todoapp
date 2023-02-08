import React from 'react'
import {useState}  from 'react'
import axios from "axios"

function Input() {
  const[veri,setVeri]=useState({"baslik":"","description":""})
  
  const onChangeInput = (e)=>{
    setVeri({...veri,[e.target.name]:e.target.value})
  }
  const onClicButton = ()=>{
    axios.post("http://localhost:3000/postModel",veri)
    console.log("on click çalıştı")
  }
  
  return (

   
      <div style={{"width":"80%","marginRight":"auto","marginLeft":"auto"}}>

        <input name="baslik"  value={veri.baslik} onChange={onChangeInput} style={{"textAlign":"center","display":"block","width":"100%","border":"none","padding":"5px"}} placeholder='baslık'></input>
        <input name="description" value={veri.description} onChange={onChangeInput} style={{"textAlign":"center","display":"block","width":"100%","border":"none","padding":"5px"}} placeholder='Gorev Ekle'></ input>
        
        <button onClick={onClicButton} style={{"textAlign":"center","display":"block","width":"100%","border":"solid red 1px","padding":"5px"}} >Ekle</button>
      </div>
    
  )
}

export default Input
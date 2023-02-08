import axios from 'axios'
import React from 'react'

function Table({todos}) {
  
 const click = (id)=>{

  axios.delete("http://localhost:3000/delModel/"+id)

 }
  return (
   <div>
      <table className='table' style={{"width":"90%","color":"white","background":"gray","marginLeft":"auto","marginRight":"auto","marginTop":"10px"}}>
        <thead>
        </thead>
        <tbody>
          {
            todos.map((x,i)=>{
              var date = x.created
              const date1 = date.split("T")
              return(
                
                <tr data-testid="tr" key={i}>
                  <td style={{"width":"20%"}}>{x.baslik}</td>
                  <td style={{"width":"20%"}}>{x.description}</td>
                  <td style={{"width":"20%"}}>{(date1[0])},{((date1[1].slice(1,8)))}</td>
                  <td style={{"width":"20%"}}><button  onClick={ () => click(x._id) }>bitti</button></td>

               
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table
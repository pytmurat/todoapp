import React from 'react'

function Status() {
  return (
    <div>
      <h1>todoapp</h1>
      <table style={{"width":"90%","color":"white","background":"gray","marginLeft":"auto","marginRight":"auto","marginTop":"10px"}}>
        <thead>
          <tr>
            <th style={{"width":"20%"}}>Konu</th>
            <th style={{"width":"20%"}}>Yapılcaklar</th>
            <th style={{"width":"20%"}}>Eklenme tarihi</th>
            <th style={{"width":"20%"}}>Bitti mi ? </th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default Status
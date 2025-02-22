import React from "react";
import "./App.css";

const mockData = [ 
  {name:'John',
age:30,
weight:60,
currentrunning:30,
goodrunning:good,},
{name:'John',
age:30,
weight:60,
currentrunning:30,
goodrunning:good,}
]
function App() {
  return (
    <div id="app">
      <h1>Enter Data</h1>
      <RunningForm />
      <TableDisplay />
    </div>
  );
}
const RunningForm = () =>{
  return(
    
    <form id="data-form">
     
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" /><br /><br />

      <label for="age">Age:</label>
      <input type="number" id="age" name="age" /><br /><br />

      <label for="weight">Weight:</label>
      <input type="number" id="weight" name="weight" /><br /><br />

      <label for="running">Current Running (Minutes):</label>
      <input type="number" id="running" name="running" /><br /><br />

      <button type="button" onClick="addData()">Add Data</button>
    </form>
  )
}
const TableDisplay = () =>{
  return(
    <div>
      <h1>Entered Data</h1>
    <table id="data-table" border="1" width="100%">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Weight</th>
        <th>Current Running (Minutes)</th>
        <th>Good Running</th>
      </tr>
      {mockData.map((data)=>{
        return (
          <tr>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.weight}</td>
            <td>{data.currentrunning}</td>
            <td>{data.goodrunning}</td>
          </tr>
        )
      })}
    </table>
    </div>
  )
}

export default App;

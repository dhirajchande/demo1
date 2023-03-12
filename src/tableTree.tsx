import React from 'react';
import employees from './employees';

export default function TableTree() {
    console.log(employees.data)
  return (
    <div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>

    {employees.data.map(e=>
        {
            return <tr>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.location}</td>            
          </tr>
        })}
    
  </tbody>
</table>
    </div>
  )
}

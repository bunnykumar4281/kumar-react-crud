import React from 'react';
import './UserTables.css'

const UserTables=(props)=>(
<table className="UserTables">
<thead>
    <tr>
        <th>Name</th>
        <th>UserName</th>
        <th>Actions</th>
    </tr>
</thead>
<tbody className="tdwidths">
    
     {props.users.length>0 ? (
     props.users.map((user)=>    (
       
     <tr key={user.id}>
        <td >{user.name}</td>
        <td>{user.username}</td>
        <td>
         <button>Edit</button>
         <button onClick={()=>props.deleteUser(user.id)}> Delete</button>
       </td>
     </tr> 
   ) )
   ):( <tr>
       <td colSpan={3}>no Users</td>
       </tr>
   )  }   
</tbody>

</table>

)

export default UserTables
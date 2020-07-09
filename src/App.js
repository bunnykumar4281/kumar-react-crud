import React, { useState } from 'react';

import './App.css';
import './Tables/UserTables.css'
import UserTables from './Tables/UserTables';
import Adduserform from './Tables/Adduser/Adduserform';

function App() {
  const appdata=[
    {id:'1',name:'kumar',username:'bunny'},
    {id:'2',name:'sai',username:'sony'},
    {id:'3',name:'mohan',username:'manu'}
    
  ]
  const [users,setUser]=useState(appdata);
  
  const addUser = (user) => {
   
    user.id = users.length + 1
    setUser([...users, user])
  }
  const deleteUser=(id)=>{
    setUser(users.filter((user)=>user.id!==id))
  }
  return (
    
    <div className="App">
      <div className="container">
<h1>Crud App</h1>
<div className="rowuv">
  <div className="adduser">
<h2 className="au">Add Users</h2>
<Adduserform addUser={addUser}/>
</div>
<h2 className="vu">View Uers</h2>
<UserTables users={users} deleteUser={deleteUser}/>


</div>

      </div>
    
    </div>
  );
}

export default App;

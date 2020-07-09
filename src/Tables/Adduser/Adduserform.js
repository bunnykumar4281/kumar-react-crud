import React, { useState } from 'react';
const Adduserform = (props) => {
    const intialFOrmstate={id:null,name:'',username:''}
    const [user,setUser]=useState(intialFOrmstate)
    const handleInputChange=(event)=>{
        const {name,value}=event.target
        setUser({...user,[name]:value})

    }
    return ( 
        <form onSubmit={(event)=>{
event.preventDefault();
if(!user.name||!user.username)
return
props.addUser(user)
setUser(intialFOrmstate)
        }}>
        <label>Name</label>
        <input type="text" name="name" value={user.name} onChange={handleInputChange} />
        <label>Username</label>
        <input type="text" name="username" value={user.username} onChange={handleInputChange} />
        <button>Add new user</button>
        
      </form>
     );
}
 
export default Adduserform;
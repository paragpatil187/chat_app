import { useState } from 'react';
import { Route,Router } from 'react-router-dom';
import './App.css';
import Chat from './Components/Chat';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';




function App() {
  const [user,setUser]=useState(null)
  return (
    <div className="App">
      {!user?(
        <Login/>
      ):(
        <div className='app_body'>
        
        <Sidebar/>
        <Chat/>
        
          
        
       

        
        

      </div>
      )}
    </div>
    )
      
      
      
      
     
  
}

export default App;

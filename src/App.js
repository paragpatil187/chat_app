import { useState } from 'react';
import { Route,Router } from 'react-router-dom';
import './App.css';
import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';




function App() {
  const [user,setUser]=useState(null)
  return (
    <div className="App">
      {!user?(
        <h1>login</h1>
      ):(
        <div className='app_body'>
        <Router>
        <Sidebar/>
        
        <Route path="/rooms/:roomId">
          
          <Chat/>
        </Route>
        <Route path="/">
          <Chat/>
        </Route>

        
        </Router>

      </div>
      )}
    </div>
    )
      
      
      
      
     
  
}

export default App;

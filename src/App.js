import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Chat from './Components/Chat';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import { useStateValue } from './Components/StateProvider';




function App() {
  const [{user},dispatch]=useStateValue();

  return (
    <div className="App">
      {!user?(
        <Login/>
      ):(
        <div className='app_body'>
          <Sidebar/>
          <Routes>
          
          <Route path="/rooms/:roomId" element={<Chat/>}>
          
          </Route>
          </Routes>
         </div>
      )}
    </div>
    )
      
      
      
      
     
  
}

export default App;

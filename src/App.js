import './App.css';
import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';




function App() {
  return (
    <div className="App">
      <div className='app_body'>
        <Sidebar/>
        <Chat/>

      </div>
    </div>
  );
}

export default App;

import { Avatar,IconButton } from '@material-ui/core'
import  MoreVertIcon  from '@material-ui/icons/MoreVert'
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import React, { useEffect, useState } from 'react'
import "../Components/CSS/sidebar.css"
import { SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from "./firebaseconfig"
import { useStateValue } from './StateProvider';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const Sidebar = () => {
    const [rooms,setRooms]=useState([]);
    const [{user},dispatch]=useStateValue();
    const [logout, setLogout] = useState(false);
    useEffect(()=>{
      const unsubscribe=  db.collection("rooms").onSnapshot(snapshot=>(
            setRooms(snapshot.docs.map(doc =>({
                id:doc.id,
                data:doc.data()
            })
            ))
        ))
        return ()=>{
            unsubscribe();
        }
        
    },[])
    const exitApp = () => {
      
      window.location.reload();
      setLogout(true);
    };
    const handleRemove=(idx)=>{
      const filterdata=rooms.filter((e)=>{
        return e.id!=idx
      })
    }
      
    
  return (
    <div className='sidebar'>
        <div className="sidebar_header">
            <Avatar src={user?.photoURL}/>
            <div className="sidebar_headerRight">
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>
                <IconButton><ChatIcon/></IconButton>
                <IconButton><MoreVertIcon/></IconButton>
                <IconButton>
                <div onClick={exitApp}>
                  <ExitToAppIcon />
                </div>
              </IconButton>
                
                
                
               
               

            </div>

        </div>
        <div className="sidebar_search">
            <div className="sidebar_container">
            <SearchOutlined/>
            <input placeholder='search or start new chat' type="text"/>

            </div>
           

        </div>
        <div className="sidebar_chats">
            
            <SidebarChat addNewChat/>
          {rooms.map(room=>(
            <SidebarChat key={room.id} id={room.id}
            name={room.data.name}/>
            
          ))
          
          }
          

        </div>

    </div>
  )
}

export default Sidebar
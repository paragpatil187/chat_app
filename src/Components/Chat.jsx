import React, { useEffect, useState } from 'react'
import "../Components/CSS/chat.css"
import { useParams } from "react-router-dom"
import { Avatar, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import {SearchOutlined } from '@material-ui/icons';
import { AttachFile } from '@material-ui/icons';
import MicIcon from "@material-ui/icons/Mic"
import db from './firebaseconfig';
import { useStateValue } from './StateProvider'
import firebase from 'firebase/compat/app';

const Chat = () => {
    const [avtarv, setavtarv] = useState("123");
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [{ user }, dispatch] = useStateValue();
    const [messages, setMessages] = useState([]);
    const [showmenu,setShowmenu]=useState(false)
    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ));
            db.collection("rooms")
            .doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot((snapshot) => 
                    setMessages(snapshot.docs.map((doc) =>
                        doc.data()))
                )
        }

    }, [roomId])
    useEffect(() => {
        setavtarv(Math.floor(Math.random() * 5000))


    }, [roomId]);
    const sendMessage = (e) => {
        e.preventDefault();
        db.collection("rooms").doc(roomId).collection("messages").add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");

    }
    return (
        <div className='chat'>
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${avtarv}.svg`} />
                <div className="chat_header_info">
                    <h3>{roomName}</h3>
                    <p>Last seen{" "}{
                        new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()
                    }</p>
                </div>
                <div className="chat_header_right">
                    <IconButton>
                        <SearchOutlined />

                    </IconButton>
                    <IconButton><AttachFile /></IconButton>
                    <IconButton>  <MoreVertIcon onClick={()=>setShowmenu(!showmenu)} /></IconButton>
                   {showmenu? <div className="movert_menu">
                        <p>Clear messages</p>
                        <p>Group info</p>
                        <p>Exit Group</p>
                    </div>:null}
                </div>
            </div>
            <div className="chat_body">
                {messages.map((e,index) => (

                    <p key={index} className={`chat_message ${e.name === user.displayName && "chat_reciever"}`}>
                        <span className='chat_name'>{e.name}</span>
                        {e.message}
                        <span className="chat_timestamp">{
                            new Date(e.timestamp?.toDate()).toUTCString()}</span>
                    </p>
                ))}

            </div>
            <div className="chat_footer">
                
                <form>
                <InsertEmoticonIcon />
                    <input type="text"
                     placeholder='Type a message'
                      value={input}
                       onChange={(e) => setInput(e.target.value)} />
                    <button onClick={sendMessage}>send a message</button>
                    <MicIcon />
                </form>
                
            </div>
        </div>
    )
}

export default Chat
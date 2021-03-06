import CreateIcon from '@material-ui/icons/Create'
import firebase from 'firebase'
import React,{useState,useEffect} from 'react'
import './Feed.css'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import {db} from '../firebaseConfig.js'
import InputOption from './InputOption'
import Post from './Post';
function Feed() {
    const [postes, setPostes] = useState([])
    const [input,setInput] = useState('')
    const sendPost = (e) =>{
        e.preventDefault()
        db.collection("posts").add({
            name: "Muhammad Ismail",
            description: "This is a test",
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }
    useEffect(() => {
    db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot)=>
     setPostes(snapshot.docs.map((doc)=>({
         id: doc.id,
         data: doc.data(),
        
     })))
    );
    }, [])

    return (
        <div className="feed">
           <div className="feed__inputContainer">
               <div className="feed_input">
                   <CreateIcon />
                   <form>
                   <input value={input} onChange={e=>setInput(e.target.value)} type="text" />
                   <button onClick={sendPost} type="submit">Send</button>
                   </form>
               </div>
               <div className="feed__inputOption">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
               </div>

           </div>
           {/* Post */}
           {
               postes.map(({id,data:{name,description,message,photoUrl}})=>(
                   <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoURL={photoUrl}
                   />
               ))
           }
        
        </div>
    )
}

export default Feed

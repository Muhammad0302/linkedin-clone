import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebaseConfig';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';
import Widgets from './components/Widgets';
function App() {
  const Dispatch = useDispatch()
   const user = useSelector(state => state.user.user)
   useEffect(() => {
   auth.onAuthStateChanged((userAuth)=>{
     if(userAuth){
      //  user is login
      Dispatch(login ({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoUrl: userAuth.photoURL
      }))
     }else{
       // user is logout
       Dispatch(logout())
     }
   })
   }, [])
   return (
    <div className="app">

       {/* Header */}
       <Header />
       {/* AppBody */}
        {          
          !user ? 
          <Login /> :
          (
               
            <div className="app__body">
            {/* SideBar */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* widgets */}
            <Widgets />
             </div>
          )          
        }

    </div>
  );
}

export default App;

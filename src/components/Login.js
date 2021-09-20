import React,{useState} from 'react'
import { auth } from '../firebaseConfig'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import './login.css'
function Login() {
    const dispatch = useDispatch()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [photourl,setPhotourl] = useState("")
    const register = () =>{
        if(!name)(
            alert("Please enter a full name")
        )
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: photourl
            }).then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: photourl
                }))
            })
        }).catch(error=>console.log(error))
    }
    const loginToApp = (e) =>{
        e.preventDefault()
        
        auth.signInWithEmailAndPassword(email,password).then((userAuth)=>{
          
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL
                }))
            }).catch(error=>console.log(error))
    }

    return (
        <div className="login">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHASrSNJeQio67Xy4VavMgNQEWoDoLL1Gxw&usqp=CAU" alt="" />
          <form>
              <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name" placeholder="Full name (required if registering)" />
              <input value={photourl} onChange={(e)=>setPhotourl(e.target.value)} type="text" name="photourl" placeholder="Profile pic URL (optional)" />
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="email" />
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="password" />
              <button type="submit" onClick={loginToApp}>Sign In</button>
          </form>
          <p>Not a member? <span className="login_register" onClick={register}>  Register Now</span> </p>
                       
        </div>
    )
}

export default Login

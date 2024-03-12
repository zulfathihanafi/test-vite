import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import supabase from './supabaseClient'
import { register, login, logout } from './api/user'
function App() {
  const [session, setSession] = useState(null);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      console.log(session)
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      {session ? (
        <div>
          Logged In
          <button onClick={()=>{logout()}}>Log Out</button>
        </div>
      ):(
        <div>
          Not Logged In
          <input type='email' onChange={(e)=>{
            setEmail(e.target.value)
          }}></input>
          <input type='password' onChange={(e)=>{
            setPassword(e.target.value)
          }}></input>

          <button onClick={()=>{
            login(email,password)
          }}>Log In</button>
        </div>
      )}
    </>
  )
}

export default App

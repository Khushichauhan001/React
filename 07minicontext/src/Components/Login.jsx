import React, {useState, useContext} from "react";
import UserContext from "../Context/userContext";
//this program tells ki userContexxt ke andr jo value h unhe kese fetch krunga m ... uske lie use UseContext by using it as hook 

function Login(){
     const [username , setUsername]  = useState('')
     const [password, setPassword ]  = useState('')
      
     const {setUser} = useContext(UserContext)
    const handleSubmit= (e) => {
          e.preventDefault()
          setUser({username, password})    // data bhjne aesa 
    }
    
    return(
        <>
         <div>
            <h2>Login</h2>
            <input type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"  />

            <input type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"  />

            <button onClick={handleSubmit}>Submit </button>
         </div>
        </>
    )
}

export default Login;

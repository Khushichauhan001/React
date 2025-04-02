import React, {useContext} from "react";
import UserContext from "../Context/userContext";

function Profile(){

    const {user} = useContext(UserContext)             // yha p user lena h ... jiska data set krna h wo ... 
    if(!user){
       return <div>Please login</div>
    }
    else {
      return <div>Welcome {user.username}</div>
    }
}

export default Profile;
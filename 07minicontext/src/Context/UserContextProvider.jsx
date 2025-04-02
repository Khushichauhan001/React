import React from "react";

import UserContext from "./userContext";

const userContextProvider = ({children}) => {
    const[user , setUser] = React.useState(null)     //1    jo bhi api call bgera krni h yha krlo  the neche jo access kia h use pass krdo simple 
        return(
            <UserContext.Provider value={{user , setUser}}>     
            {children}
            </UserContext.Provider>
        )
}

export default userContextProvider ;
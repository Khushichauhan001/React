import { useState } from 'react'  // HERE useState is a methof of hook .. aese hi lane pdenge mehod 
// can also  import more like useEffect
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(15)    // loggedIn , setLoggedIn(a method which conteol loggedIN) etc 

// let counter = 15 // is already declare kr dia h hmne 

const addValue = () => {

  // counter = counter+1 ;   (aese to update ni horha toh .. aap us method ka nam dijie or update krlijie)

  setCounter(counter+1)
  console.log("Clicked" , counter);
  
}

const removeValue = () => {
  // console.log("clicked", counter);
  setCounter(counter-1)
}
  return (
    <>
     <h1> HOW MANY COUNT GUYZZ....  </h1>
     <h2>counter value : {counter}</h2> 

     <button
     onClick={addValue}   // addvalue() islie ni likh rhe qki i want ki button click hone k bd execute ho 
     >ADD VALUE {counter}</button> 
     <br/>
    
     <button
     onClick={removeValue}
     >Remove value {counter} </button>
     {/* <br/> */}
     <p>footer: {counter}</p>
    </>
  )
}

export default App

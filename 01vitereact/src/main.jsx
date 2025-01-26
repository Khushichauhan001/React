// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// function MyApp(){
//   return (
//     <div>
//       <h1> Khushi Custom App </h1>
//     </div>
//   )
// }

// createRoot(document.getElementById('root')).render(
//   // <StrictMode>
//     <MyApp />   // it is nothing just a function ... can be write as MyApp() .. but not good way 
//   // </StrictMode>,

// )



// yha ek kam krenge ki at the ned of the day .. ye MyApp function bhi object ki form m convert hokr render horha h back of the seat 
// toh agr hum direct wo form hi dede toh ise convert hone ki jrurat hi ni pdegi ....


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// function MyApp(){
//   return (
//     <div>
//       <h1> Khushi Custom App </h1>
//     </div>
//   )
// }


// const ReactElement = {
//   type : 'a',
//   props: {
//    href: 'https://google.com',
//    target: '_blank'
//   },
//   children: 'click me to visit google'
// }  // lkn keep in mind ki ye object h or ise directly acces krnege hum ,.. ye koi function ni h toh reactELement() lo aese ni kr kste access .... 

 
// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visitgoogle</a>
// )

// createRoot(document.getElementById('root')).render(
//   // <StrictMode>
//     // <MyApp />   // it is nothing just a function ... can be write as MyApp() .. but not good way 
//   // </StrictMode>,
//   // ReactElement   // lkn abhi bhi kuch ni aarha qki hmne iske upr ka part toh likha hi ni ki kya kya parameters hme pass krenge pdenge syntax hi shi ni h dene ka 

//  // lets take another element 
//  anotherElement
 
// )








//yha hum ek element create krenge lkn usme jo arguments pass krenge ya fir props bnaynge wo apne man s ni bnage .... wo react jese bnata h vaise bnayge hum log 

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1> Khushi Custom App </h1>
    </div>
  )
}


// const ReactElement = {
//   type : 'a',
//   props: {
//    href: 'https://google.com',
//    target: '_blank'
//   },
//   children: 'click me to visit google'
// }  // lkn keep in mind ki ye object h or ise directly acces krnege hum ,.. ye koi function ni h toh reactELement() lo aese ni kr kste access .... 

 
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visitgoogle</a>
)

const vari_injection = "khushi "
const  reactELement = React.createElement(
  'a', // yha tag denge 
  {href: 'https://google.com'}, // second line m attributes ... and if not available toh empty chr do bs 
  'click me to visit google',
  vari_injection ,/// as it iss yha aajate h sare variables
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <MyApp />   // it is nothing just a function ... can be write as MyApp() .. but not good way 
  // </StrictMode>,
  // ReactElement   // lkn abhi bhi kuch ni aarha qki hmne iske upr ka part toh likha hi ni ki kya kya parameters hme pass krenge pdenge syntax hi shi ni h dene ka 

 // lets take another element 
//  anotherElement

reactELement
 
)


 
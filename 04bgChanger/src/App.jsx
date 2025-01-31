import { useState } from "react"


function App() {
  const [color , setColor] = useState("olive ")

  return (
    <>
     <div className="w-full h-screen duration-200" 
     style={{backgroundColor: color}}
     >
        {/* var of colours at bottom */}
         <div  className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white  px-3 py-2 rounded-3xl">

             <button 
             onClick={() => setColor("red")}  // it can be written as this to chnge the color of click 
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button 
           onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "blue"}}
          >Blue</button>

         <button 
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "black"}}
          >Black</button>

          <button 
           onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "purple"}}
          >Purple</button>

          <button 
           onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "Orange"}}
          >orange</button>

          <button 
           onClick={() => setColor("Green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "green"}}
          >green</button>

          <button 
           onClick={() => setColor("grey")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "grey"}}
          >grey</button>

         
             </div>
         </div>

     </div>
    </>
  )
}

export default App

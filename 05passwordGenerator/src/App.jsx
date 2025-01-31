import { useState , useCallback} from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(true);
  const [password , setPassword] = useState("")   // it is used kyuki isme bhi toh state chnge hogi har br new password generate krne k lie 


  // password generator 
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  // isme wo data aayga jo use hoa password bnane m 
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*_-+={}[]~`"

        for(let i=1 ; i<= array.length ; i++){
          let char = Math.floor(Math.random() * str.length + 1 )
          pass = str.charAt(char) // loop khtm hote hi pass m value aajygi .. but sirf value aaygi ..read ni hogi uske lie setpassword m s pass value pass krni hogi
        }

        setPassword(pass)  // it read the password 



  } , [length , numberAllowed , charAllowed , setPassword])  // useCallback(fn , dependencies)



  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-700 bg-gray-700'>

      <h1 className='tect-4xl text-center text-white'> PASSWORD GENERATOR</h1>

      <div className='className="flex shadow rounded-lg overflow-hidden mb-4" '>
        <input
         type="text"
         value={password}
         className='outline-none w-full py-1 px-3 rounded-md' placeholder='password' readOnly
        />
    </div>
</div>

    </>
  )
}

export default App

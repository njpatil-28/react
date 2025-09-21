import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [len, setlen] = useState(8)
  const[number, setnumber] = useState(false);
  const[char, setchar] = useState(false);
  const[password, setpassword] = useState(""); 

  // useref hook 
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( () => {
    let pass="";
    let str="ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str+="0123456789"
    if (char) str+="!@#$%^&*()_+"

    for (let i=1; i<=len; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setpassword(pass);
  }, [len, number, char, setpassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 5)    use to select the specific range 
    window.navigator.clipboard.writeText(password)

  }, [password])  

  useEffect(() => {
    passwordGenerator()
  }, [len, number, char, passwordGenerator])
  
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg text-orange-500  px-4 my-8 bg-gray-800'>
      <div className='flex-shadow round-lg overflow-hidden mb-4'>
        <input
        type="text" 
        value = {password}
        placeholder='Generate Password'
        className='outline-none w-full py-1 px-3'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='bg-blue-500 text-white py-1 px-3 rounded-lg'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={20}
            value={len}
            className='cursor-pointer accent-blue-500'
            onChange={(e) => setlen(e.target.value)}
          />
          <label>Length: {len}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={number}
            id='numberInput'
            onChange={() => setnumber((prevalue)=> !prevalue)}
          />
          <label>Number</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={char}
            id='charInput'
            onChange={() => setchar((prechar)=> !prechar)}
            />
            <label>Symbol</label>
            </div>
      </div>
    </div>
    
    </>
  )
}


export default App

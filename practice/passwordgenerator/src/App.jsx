import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""; //password right now empty
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // a string from which password is made
    if (numAllowed) str = str + "0123456789"; // if number is allowed string will get appended with numbers
    if (charAllowed) str = str + "~!@#$%^&*"; // if character is allowed string will get appended with characters

    for(let i = 0; i <= length; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      
      pass += str.charAt(char) //from string we take out this char from str and pass it in pass variable
    } // this loop is for the whole length where we get from a char the password(math.random will give us a random number and math.floor will skip the points after the number)
    setPassword(pass)
  },[length, numAllowed, charAllowed, setPassword])
  //UseEffect()
    useEffect(() => {
      passwordGenerator()
    }, [length, numAllowed, charAllowed, setPassword])
//UseRef
const passRef = useRef(null)

const clipboardCopy = useCallback(()=>{
  passRef.current?.select()//optional select for useRef
  passRef.current?.setSelectionRange(0, 3)//optional select with range of selection
  window.navigator.clipboard.writeText(password)
}, [password])

  return (
    <>
      <div>
        <h1>Password Genrator</h1>
        <div>
          <input type="text" value={password} placeholder="password" readOnly />
          <button
          ref={passRef}
          onClick={clipboardCopy}>button</button>
        </div>
        <div>
          <input type="range" placeholder="Length" min={8} max={20} value={length} onChange={(e)=>{setLength(e.target.value)}} />
          <label htmlFor="">{length}</label>
        </div>
        <div>
          <input type='checkbox'
          defaultChecked={numAllowed}
          id='numberInput'
          onChange={(e)=>{setnumAllowed((prev)=> !prev)}}/>
          <label htmlFor="numberInput" >Number</label>
        </div>
        <div>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={(e)=> {
            setcharAllowed((prev)=> !prev)
          }} />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App

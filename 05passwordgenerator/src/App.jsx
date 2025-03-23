import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*?";
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char); // with += we concatenate or append the values
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);


  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-red-200 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Genrator</h1>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-red-200 bg-green-700">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 mt-2 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button onClick={copyPasswordToClipboard} className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-red-200 bg-blue-700">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

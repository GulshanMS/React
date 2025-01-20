//import './App.css'
import "./index.css";

import { useState, useCallback,useEffect ,useRef} from "react";
function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(true);
  const [password, setPassword] = useState("");



const passwordRef=useRef(null)


const copypasswordtoclip=useCallback(()=>{
  window.navigator.clipboard.writeText(password)
},[password])

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (number) {
      str += "0123456789";
    }
    if (char) {
      str += "!@#$%^&*?";
    }
    for (let i = 1; i < length; i++) {
      let c = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(c);

    }
    setPassword(pass);
  }, [length, number, char, setPassword]);

  useEffect(()=>{
    passwordGenerator()
  },[length,setChar,setNumber,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-10 py-3 my-10 text-orange-700 bg-gray-500  ">
        <h1 className="text-4xl text-center text-white my-3">
          Password generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            placeholder="Password"
            value={password}
            className="outline-none w-full py-2 px-3"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copypasswordtoclip}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length :{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={()=>{setNumber((prev) => {
                 return !prev;
              })}}
            />
            <label >Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type='checkbox'
              defaultChecked={char}
              id='charinput'
              onChange={()=>{
                setChar((prev)=>!prev)
              }}
            />
            <label >Special Charcaters</label>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
}

export default App;

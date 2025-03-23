import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "dawood",
    age: 21
  }

  return (
    <>
      <h1 className=" bg-blue-500 text-black-700 rounded-lg mb-4">
        TailwindTest
      </h1>
      <Card username ="dawood Ashraf" someObj = {myObj}/>
      <Card username="Arsalan"/>
      
    </>
  );
}

export default App

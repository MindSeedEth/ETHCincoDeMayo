import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from "react-router-dom";
import { ConnectKitButton } from "connectkit";
import { useAccount, useEnsName } from 'wagmi'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  function navegarPrincipal() {
    navigate("/principal");
  }
  return (
    <>
      
      <div className="card">
        <ConnectKitButton />

        
      </div>
      <div></div>
      <div></div>
     
      
      
    </>
  )
}

export default App

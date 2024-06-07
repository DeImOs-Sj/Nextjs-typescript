'use client'


import {  useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import Link from 'next/link'


const verifyEmailPage = () => {


  const [token, setToken] = useState("")
  const [verified, setVerified] = useState(false)
  const [error, setError] = useState(false)
  

  const verifyEmail = async () => {
try {
      await axios.post("/api/user/verifyemail",{token})
  setVerified(true)
  





} catch (error: any) {
  setError(true)
  console.log(error.response.data)


  
}    




  }


  useEffect(() => {
    const urlToken = window.location.search.split("=")[1]
    
    setToken(urlToken || "")
    
  }, [])
   
  useEffect(() => {
    if (token.length > 0) {
      
      verifyEmail()
      
    }


  },[token])
















  return (
    <div>



      <h1>Veify Email</h1>
      <h2>{ token ? `${token}`: "no token"}</h2> 
      <h2>
        {verified && (
          <div>
            <h2>Verified</h2>
            <Link href="/login">Login</Link>

          </div>
        )}
        {error && (
          <div>
       <h2>Error</h2>

          </div>
    )}


      </h2>
    </div>
  )
}

export default verifyEmailPage

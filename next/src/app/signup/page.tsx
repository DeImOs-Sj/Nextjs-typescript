'use client'


import {  useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from "react-hot-toast"
import {useRouter} from "next/navigation"



const page = () => {
        const router = useRouter()


    const [user, setUser] = useState({
        
        email: "",
        password: "",
        username:""
    })


    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    


    const onSignup = async () => {


        
        try {
            setLoading(true)
            const response = await axios.post("/api/user/signup",user)

            console.log("signup success",response.data)
            router.push('/login')
    
        } catch (error) {
            alert("Enter the details ")
            console.log(error)

}


    }


    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }




        
    },[user])









  return (
      <div>
          <h1>{loading ? "Processing" : "Signup"}</h1>
          <label htmlFor="username">username</label>
          <input id='uesrname'  className='text-black' value={user.username}
              type='text'
              onChange={(e)=>setUser({...user,username:e.target.value})}
          
          />
            <label htmlFor="email">Email</label>
          <input id='email' className='text-black' value={user.email}
              type='text'
              onChange={(e)=>setUser({...user,email:e.target.value})}
          
          />
            <label htmlFor="username">password</label>
          <input id='password' className='text-black' value={user.password}
              type='text'
              onChange={(e)=>setUser({...user,password:e.target.value})}
          
          />

          <button onClick={onSignup}>Click me </button>

      
    </div>
  )
}

export default page

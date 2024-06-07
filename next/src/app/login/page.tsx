'use client'


import {  useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from "react-hot-toast"
import {useRouter} from "next/navigation"





const page = () => {

  const router = useRouter()
  
      const [buttonDisabled, setButtonDisabled] = useState(false)


  const [user, setUser] = useState({
    email: "",
    password:""
  })



  const onLogin = async () => {


            try {
            const response = await axios.post("/api/user/login",user)

            console.log("signup success",response.data)
            router.push('/profile')
    
        } catch (error) {
            alert("Enter the details ")
            console.log(error)

}



    
  }


   useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 ) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }




        
    },[user])



  



  return (
  <div>

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

          <button onClick={onLogin}>Click me </button>

      
    </div>
  )
}

export default page

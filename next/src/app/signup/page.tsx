'use client'


import { React, useEffect, useState } from 'react'
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
          Signup page
      
    </div>
  )
}

export default page

'use client'


import {  useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from "react-hot-toast"
import {useRouter} from "next/navigation"

const page = () => {

  const router = useRouter()

  const [data, setData] = useState('')
  

  const getUserDetail = async () => {

    const res = await axios.post("/api/user/me")
    console.log(res.data)
    
  }



  



  return (
    <div>
      
    </div>
  )
}

export default page

import { connect } from "@/dbConfig/dbConfig"
import User from '@/models/userModel'
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { getDataFromToken } from "@/helpers/getdatafromtoken"

connect()

export async function POST(request: NextRequest) { 
        
    try {
    

            const userId = await getDataFromToken(request)
    const user = User.findOne({ _id: userId }).select("-password")
    

    return NextResponse.json({
        message: "User found",
        data:user
    })


    } catch (error: any) {
        return NextResponse.json({ error: "User not found" },
            {status:500}
        )
    }
    
    
}
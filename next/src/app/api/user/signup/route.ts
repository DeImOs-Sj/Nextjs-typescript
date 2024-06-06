import { connect } from "@/dbConfig/dbConfig"
import User from '@/models/userModel'
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { sendEmail } from "@/helpers/mailer"


connect()


export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json()
        const { username, email, password } = reqBody
        

        console.log(username,email,password)

        console.log(reqBody);
        const user = await User.findOne({ email })
        
        if (user) {
            return NextResponse.json({ error: "User already exits" },
                {status:400})
        }
        const salt =   bcrypt.genSaltSync(10)

        const hashedPassword = await bcrypt.hash(password, salt)
        
        const newUser = new User({
            username,
            email,
            password:hashedPassword

        })


        const savedUser = await newUser.save()
        console.log(savedUser , "hi this is the user ")

        console.log(savedUser._id, "this is the id")
        
        // console.log(emailType)

        await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id })
        

        return NextResponse.json({
            message: "User Registered Successfully",
            success: true,
            savedUser
        })
        
    } catch (error: any) {
        return NextResponse.json({ error: error.message },
            {status:500}
        )
    }

}
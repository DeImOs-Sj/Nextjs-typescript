import { SocketAddress } from 'net'
import nodemailer from 'nodemailer'



export const sendEmail = async({ email, emailType, userId }:any)=> {
    try {

        //creating logic 

        const transporter = nodemailer.createTransport({
            host: "smtp.forwardemail.net",
            port: 465,
            secure: true,
            auth: {
                user: "TestContext",
                pass:"TestContext",
            
            },
        })


        const mailOptions = {
            from: "test@gmail.com",
            to: email,
            subject: emailType === 'VERIFY'?"Verify your email":"Reset your password",
            html:"<b>Hello world</b>"
        }

        const mailResponse = await.sendMail(mailOptions)
        
    } catch(error:any) {
        
        throw new Error(error.message)
    }
})
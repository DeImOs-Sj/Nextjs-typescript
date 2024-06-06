import { verify } from 'crypto'
import { SocketAddress } from 'net'
import nodemailer from 'nodemailer'
import bcrypt from "bcryptjs"
import User from '@/models/userModel'



export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {

        //creating logic 



        const hashedToken = await bcrypt.hash(userId.toString(), 10)

        if (emailType === "VERIFY") {


            await User.findByIdAndUpdate(userId, {
                $set: { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 }
            })
            
            
        } else if (emailType === "RESET") {
            
            await User.findByIdAndUpdate(userId, {$set:{ forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000 }})
        }


        var transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "39b3eb0ab6a8b5",
                pass: "82847300756e3b"
            }
        });
      
       const mailOptions = {
            from: 'hitesh@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`
       }
        
        const mailResponse = await transporter.sendMail(mailOptions)
                return mailResponse;

        
    } catch (error: any) {
        
        throw new Error(error.message)
    }
};

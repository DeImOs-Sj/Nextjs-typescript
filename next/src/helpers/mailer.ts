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


            await User.findByIdAndUpdate(userId,
                { verifyToken: hashedToken, verifyTokenExpriy: Date.now() + 360000 }
            )
            
        } else if (emailType === "RESET") {
            
            await User.findByIdAndUpdate(userId, { forgotPassword: hashedToken, forgotPasswordTokenExpiry: Date.now() + 360000 })
        }


        var transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "51883b59c545d3",
                pass: "********8417"
            }
        });
        const mailOptions = {
            from: "test@gmail.com",
            to: email,
            subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password",
            html: `<b>Click Here <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}"> Here </a>to${emailType === "VERIFY" ? "verify your email" : "reset your password"}</b>`
        }

        const mailResponse = await transporter.sendMail(mailOptions)
        
    } catch (error: any) {
        
        throw new Error(error.message)
    }
};

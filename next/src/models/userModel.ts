import { verify } from "crypto";
import mongoose from "mongoose";

// Define the User schema interface
interface UserSchema extends mongoose.Schema {
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  isAdmin: boolean;
  forgotPasswordToken?: string; // Optional property
  forgotPasswordTokenExpiry?: Date; // Optional property
  verifyToken?: string; // Optional property
  verifyTokenExpiry?: Date; // Optional property
}

const userSchema = new mongoose.Schema<UserSchema>({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

// Create the User model with explicit name and schema
const User = mongoose.models.User ||mongoose.model("User", userSchema);

export default User;

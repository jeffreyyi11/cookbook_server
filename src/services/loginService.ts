import { LoginDetails } from "../models/login/login";
import User from "../models/user/user";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const loginUser = async (loginObject: LoginDetails) => {
  const user = await User.findOne({email: loginObject.email});
  
  try {
    const correctPassword = user === null ? false : await bcrypt.compare(loginObject.password, user.password);

    if (!(user && correctPassword)) {
      throw new Error('Incorrect login');
    }

    const userToken = {
      id: user._id,
      email: user.email
    }

    const token = jwt.sign(userToken, process.env.JWT_SECRET!);
    return {token, email: user.email}
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
      throw new Error(`Error: ${error.message}`)
    }
  }
}

export default {
  loginUser
}
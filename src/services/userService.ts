import User, { IUser, NewUser} from '../models/user/user';
import bcrypt from 'bcrypt';

const getAllUsers = async () => {
  const result = await User.find({});
  return result;
}

const addUser = async (newUserObject: NewUser)=> {
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(newUserObject.password, salt);

  const newUser = new User({
    ...newUserObject,
    passwordHash
  })

  try {
    const createdUser = await newUser.save();

    return createdUser;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error: ${error.message}`);
    }
  }
}

const updateUser = async (userId: string, userObject: IUser) => {
  let foundUser = await User.findById(userId);

  if (!foundUser) {
    throw new Error('User not found');
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, userObject, {new: true});
    console.log(updatedUser);
    return updatedUser;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error: ${error.message}`);
    }
  }
};

const deleteUser = async (userId: string) => {
  return await User.findByIdAndDelete(userId);
}

export default {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser
}
import User from '../models/user/user';
import { UserInterface, NewUser } from '../models/user/type';

const getAllUsers = async () => {
  const result = await User.find({});

  if (result) return result;
}

const addUser = async (newUserObject: NewUser): UserInterface | undefined=> {
  return;
}

export default {
  getAllUsers,
  addUser
}
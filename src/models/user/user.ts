import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

export interface NewUser {
  username: string;
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
}

export interface IUser extends NewUser {
  passwordHash: string;
  friends?: [];
  recipes?: [];
}

export type UserBasic = typeof userSchema;

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  friends: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  recipes: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  }
}, {timestamps: true});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  }
})

const User = model('User', userSchema);

export default User;
import { Schema, model } from "mongoose";

export interface IUser {
  username: string;
  firstName: string;
  lastName?: string;
  email: string;
  passwordHash: string;
  friends?: [];
  recipes?: [];
}

export interface NewUser {
  username: string;
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true
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
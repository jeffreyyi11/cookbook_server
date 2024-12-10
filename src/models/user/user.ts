import { Schema, model } from "mongoose";
import { UserInterface } from "./type";

const userSchema = new Schema<UserInterface>({
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
    required: true
  },
  email: {
    type: String,
    required: true
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
});

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
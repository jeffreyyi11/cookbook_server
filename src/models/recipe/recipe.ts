import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ingredient'
    }
  ],
  prepTime: {
    type: String
  },
  cookTime: {
    type: String
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

recipeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
})

const Recipe = model('Recipe', recipeSchema);

export default Recipe;
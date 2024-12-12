import { Schema, model } from "mongoose";

export interface IIngredient {
  name: string;
}

const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Ingredient = model('Ingredient', ingredientSchema);

export default Ingredient;
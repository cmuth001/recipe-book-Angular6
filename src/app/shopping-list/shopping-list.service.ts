import { Ingredient } from '../shared/ingredient.model'
export class ShoppingListService{
    private ingredients: Ingredient[]= [
        new Ingredient("Apples", 10),
        new Ingredient("Oranges", 5),
        new Ingredient("Bananas", 12)
    
      ];
    getIngredientsList(){
        return this.ingredients;
    }
    addIngridentToList(ingredient: Ingredient){
        this.ingredients.push(ingredient); 

    }
}
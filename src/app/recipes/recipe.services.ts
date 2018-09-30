import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test recipe','https://images-gmi-pmc.edge-generalmills.com/8a61d4b7-8967-47f0-b486-71a0e86ca82a.jpg' ),
        new Recipe('A Test Recipe', 'This is simply a test recipe','https://images-gmi-pmc.edge-generalmills.com/8a61d4b7-8967-47f0-b486-71a0e86ca82a.jpg' ),
        new Recipe('A Test Recipe', 'This is simply a test recipe','https://images-gmi-pmc.edge-generalmills.com/8a61d4b7-8967-47f0-b486-71a0e86ca82a.jpg' )
      ];
    getRecipeList(){
        return this.recipes.slice();
    }

}
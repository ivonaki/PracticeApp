import { Recipe } from './recipe.model';
import { from } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected= new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty pasta', 
            'Quick and easy lunch!', 
            'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg',
            [
                new Ingredient('Pasta', 1),
                new Ingredient('Paprika', 2),
                new Ingredient('Cheese', 1)
            ]),
        new Recipe(
            'Sweet potato curry', 
            'Healty and delicious!', 
            'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/satay-sweet-potato-curry_1.jpg',
            [
                new Ingredient('Rice', 1),
                new Ingredient('Batat', 2)
            ])
      ];

      getRecipes (){
          return this.recipes.slice();
      }
}
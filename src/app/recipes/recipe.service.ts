import { Recipe } from './recipe.model';
import { from } from 'rxjs';

export class RecipeService {
   private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg'),
        new Recipe('Another test recipe', 'This is simply a test', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg')
      ];

      getRecipes (){
          return this.recipes.slice();
      }
}
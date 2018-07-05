import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService{
	ingredientChanged=new Subject<Ingredient[]>();
	private ingredients:Ingredient[]=[
	new Ingredient("apple",5)];
	getIngredient(){
		return this.ingredients.slice();
	}
	addIngredient(ingredient:Ingredient){
		this.ingredients.push(ingredient);
		this.ingredientChanged.next(this.ingredients.slice());
	}
	addIngredients(ingredients:Ingredient[]){
		/*for(let ingredient of ingredients)
		{
			this.addIngredient(ingredient);
		}*/
		this.ingredients.push(...ingredients);		
this.ingredientChanged.next(this.ingredients.slice());
	}

}
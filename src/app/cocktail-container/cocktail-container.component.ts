import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktails.interface';
@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss']
})
export class CocktailContainerComponent implements OnInit {
   public cocktails: Cocktail[]= [
    {
      name:'Mojito',
      img:'https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375',
      description:'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.',
      ingredients:[
        '10 fresh mint leaves',
        '1/2 lime, cut into 4 wedges',
        '2 tablespoons white sugar, or to taste',
        '1 cup ice',
        '1 1/2 fluid ounces white rum',
        '1/2 cup club soda'
      ]
    },
    {
      name:'Apple Martini',
      img:'https://www.hangoverweekends.co.uk/media/15499/applemar.gif?width=217px&height=316px',
      description:'The Apple Martini or “Appletini” adds a twist to the typical dry martini. Vodka is used as opposed to gin as the basis of the cocktail and apple schnapps is added for a sweet but slightly sour twist. The cocktail is usually finished with lemon juice and garnished with a slice of apple, simple but tasty.',
      ingredients:[
        '2 oz vodka',
        '1 oz apple Schnapps splash of Cointreau thin apple piece for garnish sour apple martini',
        '2 oz vodka',
        '1 oz apple Schnapps with big squeeze of fresh lime juice thin apple slice for garnish',
  
      ]
    },
    {
      name:'Long Island Iced Tea',
      img:'https://www.hangoverweekends.co.uk/media/15498/long-island-iced-tea.jpg?width=236px&height=418px',
      description:'A cocktail that never seems to go out of style. The potent concoction of rum, tequila, vodka, gin and triple sec finished with a mixture of sweet and sour cola and lemon juice. Tea isn\'t actually an addition to the drink, but the ingredients used predominantly the cola, provide the profile of tea with much more flavour.',
      ingredients:[
        '1/2 oz vodka',
        '1/2 oz gin',
        '1/2 oz light rhum',
        '1/4 oz tequila',
        '1/2 oz triple sec',
        '1 Tbsp. fresh lemon juice or possibly to taste',
        '6 oz cola or potentially to fill broken ice',
      ]
    }
  ]
public selectedCocktail: Cocktail 
  constructor() { }

  ngOnInit(): void {
    this.selectedCocktail = this.cocktails[0]
  }
public selectCocktail(index:number):void{
  console.log(index)
 this.selectedCocktail = this.cocktails[index]
}
}

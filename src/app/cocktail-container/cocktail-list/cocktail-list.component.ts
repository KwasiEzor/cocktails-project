import { Component, OnInit , Input, Output ,EventEmitter} from '@angular/core';
import { Cocktail } from 'src/app/interfaces/cocktails.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
 @Input() public cocktails : Cocktail[]
 @Output() private changeCocktail : EventEmitter<number> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
 public selectCocktail(index:number):void{
// console.log(index)
this.changeCocktail.emit(index)
 }
}

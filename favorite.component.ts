import {Component, Input} from 'angular2/core'

@Component({
    selector: 'favorite',
    template: `
    <i class="glyphicon" 
    class.glyphicon-star-empty = {{!isFavorite}}
    class.glyphicon-star = {{isFavorite}}
    (click)="OnClick()"></i>
    ` 
   
}) 

export class FavoriteComponent{
@Input() isFavorite= false;

OnClick(){
this.isFavorite = !this.isFavorite;
}

} 
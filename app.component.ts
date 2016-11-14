import {Component} from 'angular2/core';
//import {CoursesComponent } from './courses.component'
//import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'

@Component({
    selector: 'my-app',
    template: '<favorite></favorite>',
    //` 
    //<h1>{{title}}</h1>
   // <img src = {{image}} />
   // <courses></courses>
   // <authors></authors>`,
    directives: [FavoriteComponent]
})
export class AppComponent {
   // is= true;
   // title = "Angular App";
   // image= "http://www.devoirdememoire.eu/images/poppy.jpg";
}
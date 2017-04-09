import {NgModule} from '@angular/core';
import { MovieComponent } from './movie/movie.component';
import { SignUpComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
 {path:'movie', component: MovieComponent},
     {path:'search', component: SearchComponent},
     {path:'signup', component: SignUpComponent},
     {path:'card', component: CardComponent},
      

];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
      ],
      exports:[
          RouterModule
      ]

})
export class AppRoutingModule{}
export const routingComponents = [MovieComponent, SearchComponent, SignUpComponent, CardComponent];
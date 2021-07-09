import {Routes} from '@angular/router'
import {SearchMovieComponent} from './search-movie/search-movie.component';

import { LiveCodingComponent } from './live-coding/live-coding.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { RessourceComponent } from './ressource/ressource.component';
import { AuthGuard } from './core/auth.guard';


export const route :Routes = [
{path: 'live-coding', component:LiveCodingComponent },
{path: 'search-movie', component:SearchMovieComponent },
{path: 'ressource', component: RessourceComponent, canActivate: [AuthGuard] },
{path: 'exercices', component:ExercicesComponent},



];









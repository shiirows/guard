
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule,} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { route } from './app.route';
import { MenuComponent,  } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { RessourceComponent } from './ressource/ressource.component';
import { LiveCodingComponent,  } from './live-coding/live-coding.component';
import { ExercicesComponent, } from './exercices/exercices.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RessourceComponent,
    LiveCodingComponent,
    ExercicesComponent,
    SearchMovieComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { ViewComponent } from './component/view/view.component';
import { AppRoutes } from '../App.Routes.Module';
import { DetailsComponent } from './component/details/details.component';
import { EventComponent } from './component/event/event.component';
import { NevBarComponent } from './component/nev-bar/nev-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ViewComponent,
    DetailsComponent,
    EventComponent,
    NevBarComponent,
    // FormsComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

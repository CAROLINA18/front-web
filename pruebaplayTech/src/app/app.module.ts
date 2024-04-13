import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    LoginComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

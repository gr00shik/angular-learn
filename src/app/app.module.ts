import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { BackgroundDirective } from "./directives/background.directive";
import { RenderDirective } from "./directives/render.directive";
import { PipeComponent } from './pipe/pipe.component'
import { PowPipe } from "./pow.pipe";
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    BackgroundDirective,
    RenderDirective,
    PipeComponent,
    PowPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

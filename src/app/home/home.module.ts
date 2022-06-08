import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
// import { PrivacidadeComponent } from './components/privacidade/privacidade.component';


@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeScreenComponent } from './home-screen.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeScreenComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeScreenModule { }

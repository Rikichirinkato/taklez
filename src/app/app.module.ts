import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeScreenModule} from "./components/home-screen/home-screen.module";
import {ConfigurationModule} from "./components/configuration/configuration.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HomeScreenModule, ConfigurationModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

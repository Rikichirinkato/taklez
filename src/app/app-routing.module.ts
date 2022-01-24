import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent
  },
  {
    path: 'configuration',
    component: ConfigurationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

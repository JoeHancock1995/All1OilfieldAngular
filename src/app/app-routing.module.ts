import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: 'HomePageComponent',
    component: HomePageComponent
  },
  {
    path: 'AboutPageComponent',
    component: AboutPageComponent
  },
  {
    path: '',
    redirectTo: '/HomePageComponent',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/HomePageComponent',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

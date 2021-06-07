import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { EquipmentPageComponent } from './equipment-page/equipment-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
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
    path: 'EquipmentPageComponent',
    component: EquipmentPageComponent
  },
  {
    path: 'ContactPageComponent',
    component: ContactPageComponent
  },
  {
    path: 'ClientPageComponent',
    component: ClientPageComponent
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

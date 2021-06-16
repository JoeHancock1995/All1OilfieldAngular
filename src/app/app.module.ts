import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule} from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './nav/nav.component';
import { EquipmentPageComponent } from './equipment-page/equipment-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ShadowComponent } from './shadow/shadow.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    HomePageComponent,
    NavComponent,
    EquipmentPageComponent,
    ClientPageComponent,
    ContactPageComponent,
    ShadowComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    TabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

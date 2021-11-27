import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './web/layout/header/header.component';
import { FooterComponent } from './web/layout/footer/footer.component';
import { HomeComponent } from './web/home/home.component';
import { AboutComponent } from './web/about/about.component';
import { ServicesComponent } from './web/services/services.component';
import { FranchiseeComponent } from './web/franchisee/franchisee.component';
import { ContactComponent } from './web/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    FranchiseeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

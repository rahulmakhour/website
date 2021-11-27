import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './web/layout/header/header.component';
import { FooterComponent } from './web/layout/footer/footer.component';
import { HomeComponent } from './web/home/home.component';
import { AboutComponent } from './web/about/about.component';
import { ServicesComponent } from './web/services/services.component';
import { FranchiseeComponent } from './web/franchisee/franchisee.component';
import { ContactComponent } from './web/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'Footer', component: FooterComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'Franchisee', component: FranchiseeComponent },
  { path: 'Contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

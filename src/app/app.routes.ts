import { Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent},
  { path: '**', component: HomepageComponent }

];

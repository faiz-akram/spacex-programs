import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './dashboard/content/content.component';
import { FilterContentComponent } from './dashboard/filter-content/filter-content.component';
import { LandingComponent } from './dashboard/landing/landing.component';


const routes: Routes = [
  { path: '' , component : ContentComponent},
  { path : 'filter-by-year/:year', component : FilterContentComponent},
  { path : 'launch-status/:status',  component : LandingComponent},
  { path : 'land-status/:land-status',  component : LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

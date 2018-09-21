import { NgModule } from '@angular/core';
import {RouterModule,Routes, Router} from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent} from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'heroes', component: HeroesComponent}
] ;

@NgModule({
  //imports: [
    //CommonModule
  //],
  //declarations: []
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }

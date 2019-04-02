import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PmAireComponent } from './pm-aire/pm-aire.component';

const routes: Routes = [
  {
    path: 'pmaire',
    component: PmAireComponent
  },
  {
    path: '',
    redirectTo: '/pmaire',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimoComponent } from './primo/primo.component';

const routes: Routes = [
  { path: 'primo', component: PrimoComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'products', loadChildren: '../app/products/product.module#ProductModule' },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
 
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash:true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

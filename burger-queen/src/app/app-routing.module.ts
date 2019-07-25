import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import {ViewOrdersComponent} from './components/home/view/view-orders.component'


export const routes: Routes = [
{ path: 'home', component: HomeComponent,
  canActivate: [AuthGuard]},
{path: 'home', 
  children:[ 
{path: 'view-orders', component: ViewOrdersComponent},
  ]
},
{path: 'login', component: LoginComponent},
{path: '**', pathMatch: 'full', redirectTo : 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
                     
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canDeactivate: [canDeactivate]},
  {path: 'home', component: HomeComponent, canDeactivate: [canDeactivate]},
  {path: 'accounts', component: AccountsComponent},
  
]

function canDeactivate(component) {
  return component.canDeactivate()
}
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
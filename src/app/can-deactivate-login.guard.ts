import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable()
export class CanDeactivateLoginGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(component: LoginComponent):  boolean {
    if(component.form.dirty) {
     return confirm('Do you want to leave this page?');
    }
    return true;
  }
}

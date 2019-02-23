import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

	constructor(private router: Router, private auth: AuthService) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.auth.isUserLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['login']);
        }
	}
}

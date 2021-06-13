import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router,
        public fbAuth: AngularFireAuth,
    ) { }

    canActivate(): boolean {
        console.log(this.authService.currentUser.value.uid)
        if (this.authService.currentUser.value && this.authService.currentUser.value.uid) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class LoggedInAuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService,
    ) { }

    canActivate(): boolean {
        if (this.authService.currentUser.value && this.authService.currentUser.value.uid) {
            this.router.navigate(['/dashboard']);
            return false;
        } else {
            return true;
        }
    }


    // canActivate(): boolean {
    //     if (this.authService.currentUser.value && this.authService.currentUser.value.uid) {
    //         return true;
    //     } else {
    //         this.router.navigate(['/login']);
    //         return false;
    //     }
    // }
}

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ErrorService {

    errorMessges: any = {
        'auth/user-not-found': 'Invalid email address.',
        'auth/wrong-password': 'Invalid email and password.',
        "auth/email-already-in-use": 'The email address is already in use.',
    };

    constructor() { }

    handleError(error: any): any {
        return this.errorMessges[error.code];
    }

}

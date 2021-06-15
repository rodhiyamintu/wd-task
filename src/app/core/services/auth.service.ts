import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response';
import { ErrorService } from './error.service';

const CURRENT_USER = 'cuser';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    authState: any = null;
    currentUser = new BehaviorSubject<any>(null);
    allUsers: [] = [];

    isLoggedIn = false;
    constructor(
        public fbAuth: AngularFireAuth,
        public fbDB: AngularFirestore,
        public router: Router,
        private errorService: ErrorService
    ) {
        this.fbAuth.authState.subscribe((auth) => {
            this.authState = auth;
        })
        // this.checkingFun('123456');
        this.autoSignIn();
    }

    get isUserAnonymousLoggedIn(): boolean {
        return (this.authState !== null) ? this.authState.isAnonymous : false
    }

    get isUserEmailLoggedIn(): boolean {
        if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
            return true
        } else {
            return false
        }
    }

    async login(email: string, password: string) {

        return await this.fbAuth.signInWithEmailAndPassword(email, password).then((response) => {
            this.isLoggedIn = true;

            this.fbDB.collection('users', ref => {
                let query = ref.where('uid', '==', response.user?.uid);
                return query;
            }).valueChanges().subscribe((data: any) => {
                let userInfo = {
                    uid: response.user?.uid,
                    oid: data[0].oid,
                    displayName: response.user?.displayName,
                    role: data[0].role,
                    email: response.user?.email
                }
                localStorage.setItem(CURRENT_USER, JSON.stringify(userInfo))
                // this.fbDB.collection('users').doc()
                this.authState = userInfo;
                this.currentUser.next(userInfo);
                this.router.navigate(['/dashboard']);
            })
        })
    }

    async register(d: any) {

        // this.fbAuth.updateCurrentUser()
        return await this.fbAuth.createUserWithEmailAndPassword(d.email, d.password).then((response) => {
            this.isLoggedIn = true;
            response.user?.updateProfile({
                displayName: d.name,
            })
            this.fbDB.collection('users').add({
                uid: response.user?.uid,
                displayName: d.name,
                role: 'Super Admin'
            })

            let userInfo = {
                uid: response.user?.uid,
                oid: '',
                displayName: d.name,
                role: 'Super Admin',
                email: response.user?.email
            }
            localStorage.setItem(CURRENT_USER, JSON.stringify(userInfo));

            this.authState = userInfo;
            this.currentUser.next(userInfo);
            this.router.navigate(['/dashboard']);
        })
    }

    autoSignIn() {
        const userData = localStorage.getItem(CURRENT_USER);
        // console.log(userData);
        if (!userData) {
            // this.router.navigate(['/login']);
        } else {

            const parseData = JSON.parse(userData);
            this.getAllUsers(parseData.oid);
            this.currentUser.next(parseData);
        }
    }

    logout() {
        this.isLoggedIn = false;
        this.fbAuth.signOut();
        localStorage.removeItem(CURRENT_USER);
        this.currentUser.next(null);
        this.router.navigate(['/login']);
    }

    async changePassword(password: any) {
        // this.fbAuth.send

        this.fbAuth.sendPasswordResetEmail('rodhiya.mintu@gmail.com').then((result) => {
            console.log(result)
        }).catch(error => {
            console.log(error)
        })

        // await this.fbAuth.onAuthStateChanged((user) => {
        //     user?.updatePassword(password).then((result) => {
        //         console.log(result)
        //     }).catch((error) => {
        //         console.log(error)
        //     })
        // })
    }

    async getAllUsers(id: any) {
        console.log('calling ' + id)
        await this.fbDB.collection('users', ref =>
            ref.where('oid', '==', id)).valueChanges().subscribe((data: any) => {
                this.allUsers = data;
                console.log(this.allUsers)
            })
    }

    getUserInfo(id: any) {
        return this.allUsers.filter((d: any) => d.uid == id);
    }
}

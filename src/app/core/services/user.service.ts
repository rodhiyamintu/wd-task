import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private fbAuth: AngularFireAuth,
        private fbDB: AngularFirestore
    ) { }

    async addUser(d: any) {
        await this.fbAuth.createUserWithEmailAndPassword(d.email, d.password).then((response) => {
            response.user?.updateProfile({
                displayName: d.name,
            })
            this.fbDB.collection('users').add({
                uid: response.user?.uid,
                displayName: d.name,
                role: d.role,
                email: d.email,
                oid: d.oid,
                timestamp: Timestamp
            })
        })
    }

    async getAllUsers(id: any) {
        return await this.fbDB.collection('users', ref =>
            ref.where('oid', '==', id)).valueChanges();
    }
}
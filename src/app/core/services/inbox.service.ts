import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class InboxService {

    private dbPath = '/inbox';
    inboxRef: AngularFirestoreCollection<Task>;

    constructor(
        private fbAuth: AngularFireAuth,
        private fbDB: AngularFirestore) {
        this.inboxRef = fbDB.collection(this.dbPath);
    }

    // send message
    sendMessage(d: any) {
        return this.inboxRef.add(d);
    }


    async allMessages(id: any) {
        return await this.fbDB.collection('inbox', ref =>
            ref.where('to', 'array-contains', id)).valueChanges({ idField: 'docId' });
    }


}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Project } from '../interfaces/project';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    private dbPath = '/projects';
    projectRef: AngularFirestoreCollection<Project>;

    constructor(
        private fbAuth: AngularFireAuth,
        private fbDB: AngularFirestore) {
        this.projectRef = fbDB.collection(this.dbPath);
    }

    async addProject(d: any) {
        // await this.fbDB.collection('projects').add({
        //     title: d.title,
        //     displayName: d.displayName,
        //     uid: d.uid,
        //     progress: d.progress,
        //     description: d.description,
        //     createdBy: d.createdBy,
        //     createdByName: d.createdByName,
        //     createdAt: new Date(),
        //     updatedAt: new Date()
        // })
        await this.fbDB.collection('projects').add(d);
    }

    async allProject(id: any) {
        return await this.fbDB.collection('projects', ref =>
            ref.where('createdById', '==', id)).valueChanges({ idField: 'docId' });
    }

    async getProject(id: any) {
        return await this.fbDB.collection('projects').doc(id).valueChanges({ idField: 'docId' })
    }

    async updateProject(id: any, d: any) {
        return await this.projectRef.doc(id).update(d);
    }
}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Task } from '../interfaces/task';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private dbPath = '/tasks';
    taskRef: AngularFirestoreCollection<Task>;

    constructor(
        private fbAuth: AngularFireAuth,
        private fbDB: AngularFirestore) {
        this.taskRef = fbDB.collection(this.dbPath);
    }

    async addTask(d: any) {
        await this.fbDB.collection('tasks').add({
            title: d.title,
            assignedName: d.assignedName,
            assignedId: d.assignedId,
            pid: d.pid,
            progress: d.progress,
            description: d.description,
            createdById: d.createdById,
            createdByName: d.createdByName,
            createdAt: new Date(),
            updatedAt: new Date()
        })
    }


    async allTasks(id: any) {
        return await this.fbDB.collection('tasks', ref =>
            ref.where('pid', '==', id)).valueChanges({ idField: 'docId' });
    }

    async viewTask(id: any) {
        return await this.taskRef.doc(id).valueChanges({ idField: 'docId' })
    }

    async updatedTask(id: any, d: any) {
        await this.taskRef.doc(id).update({
            title: d.title,
            assignedName: d.assignedName,
            assignedId: d.assignedId,
            pid: d.pid,
            progress: d.progress,
            description: d.description,
            createdById: d.createdById,
            createdByName: d.createdByName,
            updatedAt: new Date()
        })
    }
}

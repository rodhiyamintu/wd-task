import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor(
        private authService: AuthService,
        private fbStore: AngularFirestore
    ) { }

    ngOnInit(): void {
        // this.fbStore.collection('users').snapshotChanges().subscribe(data => {
        //     data.map(e => {
        //         console.log(e.payload.doc.id)
        //     })
        // })

        this.fbStore.collection('users', ref => {
            let query = ref.where('uid', '==', "inlzGSmEtrdVNcMl2GTOnqXIkRR2");
            return query;
        }).valueChanges().subscribe((data: any) => {
            let resultData = data;
            console.log(data[0].role)
        })

    }

}

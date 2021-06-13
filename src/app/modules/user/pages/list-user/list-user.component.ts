import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';


@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.scss'],
    providers: [MessageService]
})
export class ListUserComponent implements OnInit {
    currentUser: any = null;
    blocked: boolean = false;
    loading: boolean = true;
    users: any;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private userService: UserService,
        private router: Router,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this.currentUser = this.authService.currentUser.value;
        this.getAllUsers();
    }


    getAllUsers() {
        this.userService.getAllUsers(this.currentUser.uid).then(data => {
            data.subscribe(d => {
                console.log(d)
                this.users = d;
                this.loading = false;
            })
        })
    }
}
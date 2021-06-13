import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss'],
    providers: [MessageService]
})
export class AddUserComponent implements OnInit {

    blocked: boolean = false;
    userForm!: FormGroup;
    currentUser: any = null;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private userService: UserService,
        private router: Router,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this.currentUser = this.authService.currentUser.value;
        this.userForm = this.fb.group({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            oid: new FormControl(this.currentUser.uid, [Validators.required]),
            role: new FormControl('Select Role', [Validators.required]),
            password: new FormControl('123456', [Validators.required]),
        })
    }

    // add user
    onSubmit(form: any) {

        if (form.valid) {
            this.blocked = true;

            this.userService.addUser(form.value).then((response) => {
                this.messageService.add({ severity: 'success', summary: 'User added successfully.', closable: false });
                this.userForm.reset();
                this.blocked = false;
            }).catch((error) => {
                console.log(error);
            })
        }
    }


}

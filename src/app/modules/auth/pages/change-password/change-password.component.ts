import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng//api';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss'],
    providers: [MessageService]
})
export class ChangePasswordComponent implements OnInit {
    blocked: boolean = false;
    passwordForm!: FormGroup;
    msgs!: Message[];

    constructor(
        private authService: AuthService,
        private fb: FormBuilder,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this.passwordForm = this.fb.group({
            old: new FormControl('', [Validators.required]),
            new: new FormControl('', [Validators.required]),
            cpassword: new FormControl('', [Validators.required])
        })


    }

    sendMail() {
        this.authService.changePassword('123456');
    }

    onChangePassword(form: any) {

        // if (form.valid) {
        //     if (form.value.new === form.value.cpassword) {
        //         this.msgs = [];
        //         console.log(form.value)

        //     } else {
        //         this.msgs = [
        //             { severity: 'error', summary: '', detail: 'Confim Password did not match.' }
        //         ];
        //     }
        // }

        this.authService.changePassword('123456');
    }

}

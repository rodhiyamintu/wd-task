import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/api';
import { ErrorService } from 'src/app/core/services/error.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [MessageService]
})
export class LoginComponent implements OnInit {

    blocked: boolean = false;
    loginForm!: FormGroup;
    msgs!: Message[];

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private errorService: ErrorService
    ) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        })
    }


    onLogin(form: any) {
        if (form.valid) {
            this.blocked = true;
            console.log(form.value)
            this.authService.login(form.value.email, form.value.password).then((data) => {
            }).catch((error) => {
                this.msgs = [{ severity: 'error', summary: 'Error', detail: this.errorService.handleError(error) }]
                this.blocked = false;
            })
        }
    }

}

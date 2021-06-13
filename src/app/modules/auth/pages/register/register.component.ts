import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    blocked: boolean = false;
    registerForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.registerForm = this.fb.group({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        })

        // this.authService.currentUser();
    }


    onRegister(form: any) {
        if (form.valid) {
            this.blocked = true;
            console.log(form.value)
            this.authService.register(form.value)
        }
    }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { PrimeModule } from 'src/app/shared/prime.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ForgetPasswordComponent,
        ChangePasswordComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        PrimeModule,
        SharedModule
    ]
})
export class AuthModule { }

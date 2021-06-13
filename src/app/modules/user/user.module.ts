import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeModule } from 'src/app/shared/prime.module';


@NgModule({
    declarations: [
        AddUserComponent,
        EditUserComponent,
        ListUserComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule,
        PrimeModule
    ]
})
export class UserModule { }

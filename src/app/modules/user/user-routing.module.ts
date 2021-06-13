import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { ListUserComponent } from './pages/list-user/list-user.component';

const routes: Routes = [
    { path: '', component: ListUserComponent },
    { path: 'add', component: AddUserComponent },
    { path: 'edit/:id', component: EditUserComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }

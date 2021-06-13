import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { ListTaskComponent } from './pages/list-task/list-task.component';

const routes: Routes = [
    { path: ':pid', component: ListTaskComponent },
    { path: ':pid/add', component: AddTaskComponent },
    { path: ':pid/edit/:id', component: EditTaskComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskRoutingModule { }

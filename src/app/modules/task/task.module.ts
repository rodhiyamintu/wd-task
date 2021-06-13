import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { ListTaskComponent } from './pages/list-task/list-task.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeModule } from 'src/app/shared/prime.module';


@NgModule({
    declarations: [
        EditTaskComponent,
        AddTaskComponent,
        ListTaskComponent
    ],
    imports: [
        CommonModule,
        TaskRoutingModule,
        SharedModule,
        PrimeModule
    ]
})
export class TaskModule { }

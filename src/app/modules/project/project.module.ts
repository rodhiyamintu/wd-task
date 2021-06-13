import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ListProjectComponent } from './pages/list-project/list-project.component';
import { AddProjectComponent } from './pages/add-project/add-project.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { PrimeModule } from 'src/app/shared/prime.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        ListProjectComponent,
        AddProjectComponent,
        EditProjectComponent
    ],
    imports: [
        CommonModule,
        ProjectRoutingModule,
        PrimeModule,
        SharedModule
    ]
})
export class ProjectModule { }

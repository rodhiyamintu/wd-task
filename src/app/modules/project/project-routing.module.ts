import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './pages/add-project/add-project.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { ListProjectComponent } from './pages/list-project/list-project.component';

const routes: Routes = [
    { path: '', component: ListProjectComponent },
    { path: 'add', component: AddProjectComponent },
    { path: 'edit/:id', component: EditProjectComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule { }

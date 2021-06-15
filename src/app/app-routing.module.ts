import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { LoggedInAuthGuard } from 'src/app/core/guard/logged-in-auth.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ContentComponent } from './layouts/content/content.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '', component: AuthLayoutComponent, canActivate: [LoggedInAuthGuard],
        children: [
            { path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) }
        ]
    },
    { path: 'dashboard', component: ContentComponent, canActivate: [AuthGuard], loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'project', component: ContentComponent, canActivate: [AuthGuard], loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule) },
    { path: 'task', component: ContentComponent, canActivate: [AuthGuard], loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule) },
    { path: 'user', component: ContentComponent, canActivate: [AuthGuard], loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
    { path: 'settings', component: ContentComponent, canActivate: [AuthGuard], loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule) },
    { path: 'message', component: ContentComponent, canActivate: [AuthGuard], loadChildren: () => import('./modules/inbox/inbox.module').then(m => m.InboxModule) },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

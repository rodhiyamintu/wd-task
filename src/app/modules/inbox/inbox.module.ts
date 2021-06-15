import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { PrimeModule } from 'src/app/shared/prime.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewComponent } from './pages/view/view.component';


@NgModule({
    declarations: [
        ListComponent,
        AddComponent,
        ViewComponent
    ],
    imports: [
        CommonModule,
        InboxRoutingModule,
        PrimeModule,
        SharedModule
    ]
})
export class InboxModule { }

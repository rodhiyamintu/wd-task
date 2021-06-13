import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PrimeModule } from 'src/app/shared/prime.module';


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        PrimeModule,
        DashboardRoutingModule
    ]
})
export class DashboardModule { }

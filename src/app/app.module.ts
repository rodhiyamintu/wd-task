import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';

import { PrimeModule } from './shared/prime.module';
import { ContentComponent } from './layouts/content/content.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { environment } from 'src/environments/environment';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        AuthLayoutComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        PrimeModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

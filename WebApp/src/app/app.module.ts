import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { GlobalErrorHandler } from "./_services/error-handler.service";
import { AppConfig } from './_services/app-config.service';
import { JwtInterceptor, ErrorInterceptor } from './auth/_helpers';
/**
 * Import child module
 */
import { CustomerModule } from './customer/customer.module';
import { AccountantModule } from './accountant/accountant.module';
import { AdminModule } from './admin/admin.module';
import { WebModule } from './web/web.module';
import { AuthModule } from "./auth/auth.module";

export function initializeApp(appConfig: AppConfig) {
    return () => appConfig.load();
}
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AuthModule,
        HttpClientModule,
        CustomerModule,
        AccountantModule,
        AdminModule,
        WebModule
    ],
    providers: [
        ScriptLoaderService, { provide: ErrorHandler, useClass: GlobalErrorHandler },
        AppConfig, { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppConfig], multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
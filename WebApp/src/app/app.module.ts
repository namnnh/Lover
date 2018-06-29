import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";
import { GlobalErrorHandler } from "./_services/error-handler.service";
import { AppConfig } from './_services/app-config.service'; 
import { JwtInterceptor, ErrorInterceptor } from '../app/auth/_helpers'

export function initializeApp(appConfig: AppConfig) {
    return () => appConfig.load();
}
@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
    ],
    imports: [
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        AuthModule,
        HttpClientModule
    ],
    providers: [
        ScriptLoaderService, { provide: ErrorHandler, useClass: GlobalErrorHandler },
        AppConfig,{provide: APP_INITIALIZER,useFactory: initializeApp, deps: [AppConfig],multi: true},
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
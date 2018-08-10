import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from "./auth/logout/logout.component";

const routes: Routes = [
    { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
    { path : 'customer', loadChildren: './customer/customer.module#CustomerModule'},
    { path : 'accountant', loadChildren: './accountant/accountant.module#AccountantModule'},
    { path : 'admin', loadChildren: './admin/admin.module#AdminModule'},
    { path: 'logout', component: LogoutComponent },
    { path: '', loadChildren: './web/web.module#WebModule', pathMatch: 'full' },
    {
        "path": "**",
        "redirectTo": "admin/404",
        "pathMatch": "full"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
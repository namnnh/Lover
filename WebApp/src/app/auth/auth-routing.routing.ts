import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AuthCustomerComponent } from "./customer/auth-customer.component";
import { AuthAccountantComponent } from "./accountant/auth-accountant.component";
import { AuthAdminComponent } from "./admin/auth-admin.component";

const routes: Routes = [
    { path: '', redirectTo: 'customer', "pathMatch": "full" },
    { path: 'customer', component: AuthCustomerComponent },
    { path: 'accountant', component: AuthAccountantComponent },
    { path: 'admin', component: AuthAdminComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
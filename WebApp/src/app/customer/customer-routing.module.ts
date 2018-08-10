import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../auth/_guards/auth.guard";

const routes: Routes = [
    {
        "path": "",
        "component": CustomerComponent,
        "canActivate": [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }
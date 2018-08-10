import { NgModule } from '@angular/core';
import { WebComponent } from './web.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../auth/_guards/auth.guard";

const routes: Routes = [
    {
        "path": "",
        "component": WebComponent,
        "canActivate": [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebRoutingModule { }
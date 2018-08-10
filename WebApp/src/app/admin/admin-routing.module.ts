import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../auth/_guards/auth.guard";

const routes: Routes = [
    {
        "path": "",
        "component": AdminComponent,
        "canActivate": [AuthGuard],
        "children": [
            {
                "path": "index",
                "loadChildren": ".\/pages\/index\/index.module#IndexModule"
            },
            {
                "path": "404",
                "loadChildren": ".\/pages\/not-found\/not-found\/not-found.module#NotFoundModule"
            },
            {
                "path": "",
                "redirectTo": "index",
                "pathMatch": "full"
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
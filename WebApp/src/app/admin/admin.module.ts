import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutModule } from './layouts/layout.module';

@NgModule({
    imports: [
        AdminRoutingModule,
        LayoutModule
    ],
    exports: [],
    declarations: [AdminComponent],
    providers: [],
})
export class AdminModule { }

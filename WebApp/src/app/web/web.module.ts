import { NgModule } from '@angular/core';

import { WebComponent } from './web.component';
import { WebRoutingModule } from './web-routing.module';

@NgModule({
    imports: [WebRoutingModule],
    exports: [],
    declarations: [WebComponent],
    providers: [],
})
export class WebModule { }

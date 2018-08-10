import { NgModule } from '@angular/core';

import { AccountantComponent } from './accountant.component';
import { AccountRoutingModule } from './accountant-routing.module';

@NgModule({
    imports: [AccountRoutingModule],
    exports: [],
    declarations: [AccountantComponent],
    providers: [],
})
export class AccountantModule { }

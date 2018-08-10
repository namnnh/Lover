import { NgModule } from '@angular/core';

import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module'

@NgModule({
    imports: [CustomerRoutingModule],
    exports: [],
    declarations: [CustomerComponent],
    providers: [],
})
export class CustomerModule { }

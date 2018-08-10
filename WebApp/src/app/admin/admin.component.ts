import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Helpers } from '../helpers';
import { ScriptLoaderService } from '../_services/script-loader.service';

declare let mApp: any;
@Component({
    selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
    templateUrl: "./admin.component.html",
    styleUrls: [
        '../../assets/vendors/base/vendors.bundle.css',
        '../../assets/demo/default/base/style.bundle.css'
    ],
    encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {


    constructor(private _script: ScriptLoaderService, private _router: Router) {

    }
    ngOnInit() {
        this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js')
            .then(result => {
                Helpers.setLoading(false);
            });
        this._router.events.subscribe((route) => {
            if (route instanceof NavigationStart) {
                (<any>mApp).scrollTop();
                Helpers.setLoading(true);
            }
            if (route instanceof NavigationEnd) {
                Helpers.setLoading(false);
                let animation = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
                    $('.m-wrapper').removeClass(animation);
                }).removeClass(animation).addClass(animation);
            }
        });
    }

}
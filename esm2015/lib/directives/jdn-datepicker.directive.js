/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { JDNConvertibleCalendarDateAdapter } from 'jdnconvertiblecalendardateadapter';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material';
/**
 * JdnDatepickerDirective creates a wrapper element that provides a new adapter with each instance of the datepicker.
 */
export class JdnDatepickerDirective {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
}
JdnDatepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: 'jdn-datepicker',
                providers: [
                    { provide: DateAdapter, useClass: JDNConvertibleCalendarDateAdapter, deps: [MAT_DATE_LOCALE] }
                ]
            },] },
];
/** @nocollapse */
JdnDatepickerDirective.ctorParameters = () => [
    { type: DateAdapter }
];
if (false) {
    /** @type {?} */
    JdnDatepickerDirective.prototype.adapter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamRuLWRhdGVwaWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2FjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2pkbi1kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBWWpFLE1BQU07Ozs7SUFDRixZQUFvQixPQUE0QztRQUE1QyxZQUFPLEdBQVAsT0FBTyxDQUFxQztLQUFLOzs7WUFQeEUsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFNBQVMsRUFBRTtvQkFDUCxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGlDQUFpQyxFQUFFLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFO2lCQUNqRzthQUNKOzs7O1lBWFEsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSkROQ29udmVydGlibGVDYWxlbmRhckRhdGVBZGFwdGVyIH0gZnJvbSAnamRuY29udmVydGlibGVjYWxlbmRhcmRhdGVhZGFwdGVyJztcbmltcG9ydCB7IERhdGVBZGFwdGVyLCBNQVRfREFURV9MT0NBTEUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBKRE5Db252ZXJ0aWJsZUNhbGVuZGFyIH0gZnJvbSAnamRuY29udmVydGlibGVjYWxlbmRhcic7XG5cbi8qKlxuKiBKZG5EYXRlcGlja2VyRGlyZWN0aXZlIGNyZWF0ZXMgYSB3cmFwcGVyIGVsZW1lbnQgdGhhdCBwcm92aWRlcyBhIG5ldyBhZGFwdGVyIHdpdGggZWFjaCBpbnN0YW5jZSBvZiB0aGUgZGF0ZXBpY2tlci5cbiovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2pkbi1kYXRlcGlja2VyJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBEYXRlQWRhcHRlciwgdXNlQ2xhc3M6IEpETkNvbnZlcnRpYmxlQ2FsZW5kYXJEYXRlQWRhcHRlciwgZGVwczogW01BVF9EQVRFX0xPQ0FMRV0gfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSmRuRGF0ZXBpY2tlckRpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhZGFwdGVyOiBEYXRlQWRhcHRlcjxKRE5Db252ZXJ0aWJsZUNhbGVuZGFyPikgeyB9XG59XG4iXX0=
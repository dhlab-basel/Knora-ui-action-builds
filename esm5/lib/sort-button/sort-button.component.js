/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var SortButtonComponent = /** @class */ (function () {
    function SortButtonComponent() {
        this.sortKeyChange = new EventEmitter();
        this.menuXPos = 'after';
        this.position = 'left';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SortButtonComponent.prototype.sortKey = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.activeKey = value;
    };
    /**
     * @return {?}
     */
    SortButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.position === 'right') {
            this.menuXPos = 'before';
        }
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SortButtonComponent.prototype.sortBy = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.sortKeyChange.emit(key);
    };
    SortButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-sort-button',
                    template: "<span class=\"sort-button\" [class]=\"position\">\n    <button mat-icon-button [matMenuTriggerFor]=\"sortSelection\">\n        <mat-icon class=\"optimize-direction\">sort</mat-icon>\n    </button>\n    <mat-menu #sortSelection=\"matMenu\" [xPosition]=\"menuXPos\">\n        <button mat-menu-item\n                *ngFor=\"let item of sortProps\"\n                (click)=\"sortBy(item.key)\"\n                [class.active]=\"sortKey === item.key\">\n            {{item.label}}\n        </button>\n    </mat-menu>\n</span>\n",
                    styles: [".active{background:rgba(128,128,128,.8)}.right{float:right}.right .mat-icon{-webkit-transform:scale(-1,1);transform:scale(-1,1)}"]
                },] },
    ];
    /** @nocollapse */
    SortButtonComponent.ctorParameters = function () { return []; };
    SortButtonComponent.propDecorators = {
        sortKeyChange: [{ type: Output }],
        sortProps: [{ type: Input }],
        position: [{ type: Input }],
        sortKey: [{ type: Input }]
    };
    return SortButtonComponent;
}());
export { SortButtonComponent };
if (false) {
    /** @type {?} */
    SortButtonComponent.prototype.sortKeyChange;
    /** @type {?} */
    SortButtonComponent.prototype.menuXPos;
    /** @type {?} */
    SortButtonComponent.prototype.activeKey;
    /** @type {?} */
    SortButtonComponent.prototype.sortProps;
    /** @type {?} */
    SortButtonComponent.prototype.position;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2FjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zb3J0LWJ1dHRvbi9zb3J0LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBb0MzRTs2QkFkZ0QsSUFBSSxZQUFZLEVBQVU7d0JBRXZELE9BQU87d0JBTUUsTUFBTTtLQU9qQzs7Ozs7SUFMUSxxQ0FBTzs7OztJQUFoQixVQUFpQixLQUFLO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0tBQzFCOzs7O0lBS0Qsc0NBQVE7OztJQUFSO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzVCO0tBRUo7Ozs7O0lBRUQsb0NBQU07Ozs7SUFBTixVQUFPLEdBQVc7UUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNoQzs7Z0JBOUNKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsOGdCQWFiO29CQUNHLE1BQU0sRUFBRSxDQUFDLGtJQUFrSSxDQUFDO2lCQUMvSTs7Ozs7Z0NBR0ksTUFBTTs0QkFNTixLQUFLOzJCQUVMLEtBQUs7MEJBRUwsS0FBSzs7OEJBaENWOztTQW9CYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLXNvcnQtYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZTogYDxzcGFuIGNsYXNzPVwic29ydC1idXR0b25cIiBbY2xhc3NdPVwicG9zaXRpb25cIj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwic29ydFNlbGVjdGlvblwiPlxuICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJvcHRpbWl6ZS1kaXJlY3Rpb25cIj5zb3J0PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8bWF0LW1lbnUgI3NvcnRTZWxlY3Rpb249XCJtYXRNZW51XCIgW3hQb3NpdGlvbl09XCJtZW51WFBvc1wiPlxuICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW1cbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzb3J0UHJvcHNcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzb3J0QnkoaXRlbS5rZXkpXCJcbiAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInNvcnRLZXkgPT09IGl0ZW0ua2V5XCI+XG4gICAgICAgICAgICB7e2l0ZW0ubGFiZWx9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L21hdC1tZW51PlxuPC9zcGFuPlxuYCxcbiAgICBzdHlsZXM6IFtgLmFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoMTI4LDEyOCwxMjgsLjgpfS5yaWdodHtmbG9hdDpyaWdodH0ucmlnaHQgLm1hdC1pY29uey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC0xLDEpO3RyYW5zZm9ybTpzY2FsZSgtMSwxKX1gXVxufSlcbmV4cG9ydCBjbGFzcyBTb3J0QnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBPdXRwdXQoKSBzb3J0S2V5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgbWVudVhQb3M6IHN0cmluZyA9ICdhZnRlcic7XG5cbiAgICBhY3RpdmVLZXk6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHNvcnRQcm9wczogYW55O1xuXG4gICAgQElucHV0KCkgcG9zaXRpb246IHN0cmluZyA9ICdsZWZ0JztcblxuICAgIEBJbnB1dCgpIHNvcnRLZXkodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVLZXkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIHRoaXMubWVudVhQb3MgPSAnYmVmb3JlJztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc29ydEJ5KGtleTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc29ydEtleUNoYW5nZS5lbWl0KGtleSk7XG4gICAgfVxuXG59XG4iXX0=
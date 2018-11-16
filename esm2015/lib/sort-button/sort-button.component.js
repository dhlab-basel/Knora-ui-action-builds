/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class SortButtonComponent {
    constructor() {
        this.sortKeyChange = new EventEmitter();
        this.menuXPos = 'after';
        this.position = 'left';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    sortKey(value) {
        this.activeKey = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.position === 'right') {
            this.menuXPos = 'before';
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    sortBy(key) {
        this.sortKeyChange.emit(key);
    }
}
SortButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-sort-button',
                template: `<span class="sort-button" [class]="position">
    <button mat-icon-button [matMenuTriggerFor]="sortSelection">
        <mat-icon class="optimize-direction">sort</mat-icon>
    </button>
    <mat-menu #sortSelection="matMenu" [xPosition]="menuXPos">
        <button mat-menu-item
                *ngFor="let item of sortProps"
                (click)="sortBy(item.key)"
                [class.active]="sortKey === item.key">
            {{item.label}}
        </button>
    </mat-menu>
</span>
`,
                styles: [`.active{background:rgba(128,128,128,.8)}.right{float:right}.right .mat-icon{-webkit-transform:scale(-1,1);transform:scale(-1,1)}`]
            },] },
];
/** @nocollapse */
SortButtonComponent.ctorParameters = () => [];
SortButtonComponent.propDecorators = {
    sortKeyChange: [{ type: Output }],
    sortProps: [{ type: Input }],
    position: [{ type: Input }],
    sortKey: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2FjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zb3J0LWJ1dHRvbi9zb3J0LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFvQi9FLE1BQU07SUFnQkY7NkJBZGdELElBQUksWUFBWSxFQUFVO3dCQUV2RCxPQUFPO3dCQU1FLE1BQU07S0FPakM7Ozs7O0lBTFEsT0FBTyxDQUFDLEtBQUs7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7S0FDMUI7Ozs7SUFLRCxRQUFRO1FBQ0osRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzVCO0tBRUo7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQVc7UUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNoQzs7O1lBOUNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Q0FhYjtnQkFDRyxNQUFNLEVBQUUsQ0FBQyxrSUFBa0ksQ0FBQzthQUMvSTs7Ozs7NEJBR0ksTUFBTTt3QkFNTixLQUFLO3VCQUVMLEtBQUs7c0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktc29ydC1idXR0b24nLFxuICAgIHRlbXBsYXRlOiBgPHNwYW4gY2xhc3M9XCJzb3J0LWJ1dHRvblwiIFtjbGFzc109XCJwb3NpdGlvblwiPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJzb3J0U2VsZWN0aW9uXCI+XG4gICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm9wdGltaXplLWRpcmVjdGlvblwiPnNvcnQ8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxtYXQtbWVudSAjc29ydFNlbGVjdGlvbj1cIm1hdE1lbnVcIiBbeFBvc2l0aW9uXT1cIm1lbnVYUG9zXCI+XG4gICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbVxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNvcnRQcm9wc1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInNvcnRCeShpdGVtLmtleSlcIlxuICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwic29ydEtleSA9PT0gaXRlbS5rZXlcIj5cbiAgICAgICAgICAgIHt7aXRlbS5sYWJlbH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvbWF0LW1lbnU+XG48L3NwYW4+XG5gLFxuICAgIHN0eWxlczogW2AuYWN0aXZle2JhY2tncm91bmQ6cmdiYSgxMjgsMTI4LDEyOCwuOCl9LnJpZ2h0e2Zsb2F0OnJpZ2h0fS5yaWdodCAubWF0LWljb257LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLTEsMSk7dHJhbnNmb3JtOnNjYWxlKC0xLDEpfWBdXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQE91dHB1dCgpIHNvcnRLZXlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICBtZW51WFBvczogc3RyaW5nID0gJ2FmdGVyJztcblxuICAgIGFjdGl2ZUtleTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgc29ydFByb3BzOiBhbnk7XG5cbiAgICBASW5wdXQoKSBwb3NpdGlvbjogc3RyaW5nID0gJ2xlZnQnO1xuXG4gICAgQElucHV0KCkgc29ydEtleSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZUtleSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgdGhpcy5tZW51WFBvcyA9ICdiZWZvcmUnO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzb3J0Qnkoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zb3J0S2V5Q2hhbmdlLmVtaXQoa2V5KTtcbiAgICB9XG5cbn1cbiJdfQ==
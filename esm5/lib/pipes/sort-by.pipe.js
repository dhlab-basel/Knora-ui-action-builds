/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var SortByPipe = /** @class */ (function () {
    function SortByPipe() {
    }
    /**
     * @param {?} array
     * @param {?} args
     * @return {?}
     */
    SortByPipe.prototype.transform = /**
     * @param {?} array
     * @param {?} args
     * @return {?}
     */
    function (array, args) {
        if (array !== undefined) {
            array.sort(function (a, b) {
                if (args) {
                    a[args] = (a[args] === null ? '' : a[args]);
                    b[args] = (b[args] === null ? '' : b[args]);
                    if (a[args].toLowerCase() < b[args].toLowerCase()) {
                        return -1;
                    }
                    else if (a[args].toLowerCase() > b[args].toLowerCase()) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
            });
        }
        return array;
    };
    SortByPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'sortBy'
                },] },
    ];
    return SortByPipe;
}());
export { SortByPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1ieS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2FjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9zb3J0LWJ5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUFPaEQsOEJBQVM7Ozs7O0lBQVQsVUFBVSxLQUFvQixFQUFFLElBQVk7UUFDeEMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQU0sRUFBRSxDQUFNO2dCQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzVDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNoRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2I7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN2RCxNQUFNLENBQUMsQ0FBQyxDQUFDO3FCQUNaO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxDQUFDLENBQUM7cUJBQ1o7aUJBQ0o7YUFDSixDQUFDLENBQUM7U0FDTjtRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDaEI7O2dCQXZCSixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFFBQVE7aUJBQ2Y7O3FCQUpEOztTQUthLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3NvcnRCeSdcbn0pXG5leHBvcnQgY2xhc3MgU29ydEJ5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgdHJhbnNmb3JtKGFycmF5OiBBcnJheTxzdHJpbmc+LCBhcmdzOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgaWYgKGFycmF5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFycmF5LnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgYVthcmdzXSA9IChhW2FyZ3NdID09PSBudWxsID8gJycgOiBhW2FyZ3NdKTtcbiAgICAgICAgICAgICAgICAgICAgYlthcmdzXSA9IChiW2FyZ3NdID09PSBudWxsID8gJycgOiBiW2FyZ3NdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFbYXJnc10udG9Mb3dlckNhc2UoKSA8IGJbYXJnc10udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFbYXJnc10udG9Mb3dlckNhc2UoKSA+IGJbYXJnc10udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxufVxuXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validators } from '@angular/forms';
var ExistingNameDirective = /** @class */ (function () {
    function ExistingNameDirective() {
        this.valFn = Validators.nullValidator;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ExistingNameDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var change = changes['existingName'];
        if (change) {
            /** @type {?} */
            var val = change.currentValue;
            /** @type {?} */
            var re = val instanceof RegExp ? val : new RegExp(val);
            this.valFn = existingNameValidator(re);
        }
        else {
            this.valFn = Validators.nullValidator;
        }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    ExistingNameDirective.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return this.valFn(control);
    };
    ExistingNameDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[kuiExistingName]',
                    providers: [{ provide: NG_VALIDATORS, useExisting: ExistingNameDirective, multi: true }]
                },] },
    ];
    ExistingNameDirective.propDecorators = {
        existingName: [{ type: Input }]
    };
    return ExistingNameDirective;
}());
export { ExistingNameDirective };
if (false) {
    /** @type {?} */
    ExistingNameDirective.prototype.existingName;
    /** @type {?} */
    ExistingNameDirective.prototype.valFn;
}
/**
 * @param {?} nameRe
 * @return {?}
 */
export function existingNameValidator(nameRe) {
    return function (control) {
        /** @type {?} */
        var name;
        if (control.value) {
            name = control.value.toLowerCase();
        }
        /** @type {?} */
        var no = nameRe.test(name);
        return no ? { 'existingName': { name: name } } : null;
    };
}
/**
 * @param {?} nameAr
 * @return {?}
 */
export function existingNamesValidator(nameAr) {
    return function (control) {
        /** @type {?} */
        var name;
        if (control.value) {
            name = control.value.toLowerCase();
        }
        /** @type {?} */
        var no;
        try {
            for (var nameAr_1 = tslib_1.__values(nameAr), nameAr_1_1 = nameAr_1.next(); !nameAr_1_1.done; nameAr_1_1 = nameAr_1.next()) {
                var existing = nameAr_1_1.value;
                no = existing.test(name);
                if (no) {
                    // console.log(no);
                    return no ? { 'existingName': { name: name } } : null;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (nameAr_1_1 && !nameAr_1_1.done && (_a = nameAr_1.return)) _a.call(nameAr_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return no ? { 'existingName': { name: name } } : null;
        var e_1, _a;
    };
}
/**
 * @param {?} pattern
 * @param {?} regType
 * @return {?}
 */
export function notAllowed(pattern, regType) {
    return function (control) {
        /** @type {?} */
        var name;
        // console.log(regType);
        if (control.value) {
            name = control.value.toLowerCase();
        }
        /** @type {?} */
        var no = pattern.test(name);
        return no ? { regType: { name: name } } : null;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RpbmctbmFtZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvYWN0aW9uLyIsInNvdXJjZXMiOlsibGliL2V4aXN0aW5nLW5hbWUvZXhpc3RpbmctbmFtZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFtQixhQUFhLEVBQWUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztxQkFhckUsVUFBVSxDQUFDLGFBQWE7Ozs7OztJQUV4QywyQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7O1FBQzlCLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOztZQUNULElBQU0sR0FBRyxHQUFvQixNQUFNLENBQUMsWUFBWSxDQUFDOztZQUNqRCxJQUFNLEVBQUUsR0FBRyxHQUFHLFlBQVksTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUcscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDMUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztTQUN6QztLQUNKOzs7OztJQUVELHdDQUFROzs7O0lBQVIsVUFBUyxPQUF3QjtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM5Qjs7Z0JBMUJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztpQkFDekY7OzsrQkFPSSxLQUFLOztnQ0FiVjs7U0FZYSxxQkFBcUI7Ozs7Ozs7Ozs7O0FBcUJsQyxNQUFNLGdDQUFnQyxNQUFjO0lBQ2hELE1BQU0sQ0FBQyxVQUFDLE9BQXdCOztRQUM1QixJQUFJLElBQUksQ0FBQztRQUVULEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RDOztRQUVELElBQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxjQUFjLEVBQUUsRUFBQyxJQUFJLE1BQUEsRUFBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUMvQyxDQUFDO0NBQ0w7Ozs7O0FBR0QsTUFBTSxpQ0FBaUMsTUFBZ0I7SUFFbkQsTUFBTSxDQUFDLFVBQUMsT0FBd0I7O1FBRTVCLElBQUksSUFBSSxDQUFDO1FBRVQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEM7O1FBRUQsSUFBSSxFQUFFLENBQUM7O1lBQ1AsR0FBRyxDQUFDLENBQW1CLElBQUEsV0FBQSxpQkFBQSxNQUFNLENBQUEsOEJBQUE7Z0JBQXhCLElBQU0sUUFBUSxtQkFBQTtnQkFDZixFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7b0JBRUwsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxjQUFjLEVBQUUsRUFBQyxJQUFJLE1BQUEsRUFBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztpQkFDL0M7YUFDSjs7Ozs7Ozs7O1FBQ0QsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxjQUFjLEVBQUUsRUFBQyxJQUFJLE1BQUEsRUFBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7S0FDL0MsQ0FBQztDQUNMOzs7Ozs7QUFFRCxNQUFNLHFCQUFxQixPQUFlLEVBQUUsT0FBZTtJQUN2RCxNQUFNLENBQUMsVUFBQyxPQUF3Qjs7UUFDNUIsSUFBSSxJQUFJLENBQUM7O1FBSVQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEM7O1FBSUQsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBRSxFQUFDLElBQUksTUFBQSxFQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQ3hDLENBQUM7Q0FDTCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdba3VpRXhpc3RpbmdOYW1lXScsXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBFeGlzdGluZ05hbWVEaXJlY3RpdmUsIG11bHRpOiB0cnVlfV1cbn0pXG4vKipcbiAqIFdpdGggdGhlIEV4aXN0aW5nTmFtZURpcmVjdGl2ZSB3ZSBjb3VsZCBwcmV2ZW50IHRvIHVzZSBhbiBhbHJlYWR5IGV4aXN0aW5nIG5hbWVcbiAqIGUuZy4gZ2V0IGEgbGlzdCBvZiBhbGwgcHJvamVjdCBzaG9ydG5hbWVzLCB0aGVuIHdlIGNhbiB1c2UgdGhpcyBsaXN0IGFzIGV4aXN0aW5nIG5hbWVzXG4gKiBUT0RPOiBpbXBsZW1lbnQgcHJvamVjdHNTZXJ2aWNlLmdldEFsbFxuICovXG5leHBvcnQgY2xhc3MgRXhpc3RpbmdOYW1lRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9ycywgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBleGlzdGluZ05hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIHZhbEZuID0gVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yO1xuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBjb25zdCBjaGFuZ2UgPSBjaGFuZ2VzWydleGlzdGluZ05hbWUnXTtcbiAgICAgICAgaWYgKGNoYW5nZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsOiBzdHJpbmcgfCBSZWdFeHAgPSBjaGFuZ2UuY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcmUgPSB2YWwgaW5zdGFuY2VvZiBSZWdFeHAgPyB2YWwgOiBuZXcgUmVnRXhwKHZhbCk7XG4gICAgICAgICAgICB0aGlzLnZhbEZuID0gZXhpc3RpbmdOYW1lVmFsaWRhdG9yKHJlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsRm4gPSBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsRm4oY29udHJvbCk7XG4gICAgfVxufVxuXG4vLyB2YWxpZGF0aW9uIG9mIGV4aXN0aW5nIG5hbWUgdmFsdWVcbmV4cG9ydCBmdW5jdGlvbiBleGlzdGluZ05hbWVWYWxpZGF0b3IobmFtZVJlOiBSZWdFeHApOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcbiAgICAgICAgbGV0IG5hbWU7XG5cbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjb250cm9sLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBubyA9IG5hbWVSZS50ZXN0KG5hbWUpO1xuICAgICAgICByZXR1cm4gbm8gPyB7J2V4aXN0aW5nTmFtZSc6IHtuYW1lfX0gOiBudWxsO1xuICAgIH07XG59XG5cbi8vIHRoZSBzYW1lIGFzIGFib3ZlLCBidXQgd2l0aCBhbiBhcnJheSBsaXN0IG9mIGV4aXN0aW5nIG5hbWVzXG5leHBvcnQgZnVuY3Rpb24gZXhpc3RpbmdOYW1lc1ZhbGlkYXRvcihuYW1lQXI6IFtSZWdFeHBdKTogVmFsaWRhdG9yRm4ge1xuXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcblxuICAgICAgICBsZXQgbmFtZTtcblxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSkge1xuICAgICAgICAgICAgbmFtZSA9IGNvbnRyb2wudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBubztcbiAgICAgICAgZm9yIChjb25zdCBleGlzdGluZyBvZiBuYW1lQXIpIHtcbiAgICAgICAgICAgIG5vID0gZXhpc3RpbmcudGVzdChuYW1lKTtcbiAgICAgICAgICAgIGlmIChubykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5vKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm8gPyB7J2V4aXN0aW5nTmFtZSc6IHtuYW1lfX0gOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBubyA/IHsnZXhpc3RpbmdOYW1lJzoge25hbWV9fSA6IG51bGw7XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vdEFsbG93ZWQocGF0dGVybjogUmVnRXhwLCByZWdUeXBlOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcbiAgICAgICAgbGV0IG5hbWU7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVnVHlwZSk7XG5cbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjb250cm9sLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuYW1lKTtcblxuICAgICAgICBjb25zdCBubyA9IHBhdHRlcm4udGVzdChuYW1lKTtcbiAgICAgICAgcmV0dXJuIG5vID8ge3JlZ1R5cGU6IHtuYW1lfX0gOiBudWxsO1xuICAgIH07XG59XG4iXX0=
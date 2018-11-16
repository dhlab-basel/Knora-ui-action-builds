/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validators } from '@angular/forms';
/**
 * With the ExistingNameDirective we could prevent to use an already existing name
 * e.g. get a list of all project shortnames, then we can use this list as existing names
 * TODO: implement projectsService.getAll
 */
export class ExistingNameDirective {
    constructor() {
        this.valFn = Validators.nullValidator;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const change = changes['existingName'];
        if (change) {
            /** @type {?} */
            const val = change.currentValue;
            /** @type {?} */
            const re = val instanceof RegExp ? val : new RegExp(val);
            this.valFn = existingNameValidator(re);
        }
        else {
            this.valFn = Validators.nullValidator;
        }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this.valFn(control);
    }
}
ExistingNameDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kuiExistingName]',
                providers: [{ provide: NG_VALIDATORS, useExisting: ExistingNameDirective, multi: true }]
            },] },
];
ExistingNameDirective.propDecorators = {
    existingName: [{ type: Input }]
};
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
    return (control) => {
        /** @type {?} */
        let name;
        if (control.value) {
            name = control.value.toLowerCase();
        }
        /** @type {?} */
        const no = nameRe.test(name);
        return no ? { 'existingName': { name } } : null;
    };
}
/**
 * @param {?} nameAr
 * @return {?}
 */
export function existingNamesValidator(nameAr) {
    return (control) => {
        /** @type {?} */
        let name;
        if (control.value) {
            name = control.value.toLowerCase();
        }
        /** @type {?} */
        let no;
        for (const existing of nameAr) {
            no = existing.test(name);
            if (no) {
                // console.log(no);
                return no ? { 'existingName': { name } } : null;
            }
        }
        return no ? { 'existingName': { name } } : null;
    };
}
/**
 * @param {?} pattern
 * @param {?} regType
 * @return {?}
 */
export function notAllowed(pattern, regType) {
    return (control) => {
        /** @type {?} */
        let name;
        // console.log(regType);
        if (control.value) {
            name = control.value.toLowerCase();
        }
        /** @type {?} */
        const no = pattern.test(name);
        return no ? { regType: { name } } : null;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RpbmctbmFtZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvYWN0aW9uLyIsInNvdXJjZXMiOlsibGliL2V4aXN0aW5nLW5hbWUvZXhpc3RpbmctbmFtZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQW1CLGFBQWEsRUFBZSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6Rjs7Ozs7QUFTQSxNQUFNOztxQkFFYyxVQUFVLENBQUMsYUFBYTs7Ozs7O0lBRXhDLFdBQVcsQ0FBQyxPQUFzQjs7UUFDOUIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O1lBQ1QsTUFBTSxHQUFHLEdBQW9CLE1BQU0sQ0FBQyxZQUFZLENBQUM7O1lBQ2pELE1BQU0sRUFBRSxHQUFHLEdBQUcsWUFBWSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1NBQ3pDO0tBQ0o7Ozs7O0lBRUQsUUFBUSxDQUFDLE9BQXdCO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlCOzs7WUExQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO2FBQ3pGOzs7MkJBT0ksS0FBSzs7Ozs7Ozs7Ozs7O0FBb0JWLE1BQU0sZ0NBQWdDLE1BQWM7SUFDaEQsTUFBTSxDQUFDLENBQUMsT0FBd0IsRUFBMEIsRUFBRTs7UUFDeEQsSUFBSSxJQUFJLENBQUM7UUFFVCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0Qzs7UUFFRCxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsY0FBYyxFQUFFLEVBQUMsSUFBSSxFQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQy9DLENBQUM7Q0FDTDs7Ozs7QUFHRCxNQUFNLGlDQUFpQyxNQUFnQjtJQUVuRCxNQUFNLENBQUMsQ0FBQyxPQUF3QixFQUEwQixFQUFFOztRQUV4RCxJQUFJLElBQUksQ0FBQztRQUVULEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RDOztRQUVELElBQUksRUFBRSxDQUFDO1FBQ1AsR0FBRyxDQUFDLENBQUMsTUFBTSxRQUFRLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM1QixFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztnQkFFTCxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBRSxFQUFDLElBQUksRUFBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUMvQztTQUNKO1FBQ0QsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxjQUFjLEVBQUUsRUFBQyxJQUFJLEVBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDL0MsQ0FBQztDQUNMOzs7Ozs7QUFFRCxNQUFNLHFCQUFxQixPQUFlLEVBQUUsT0FBZTtJQUN2RCxNQUFNLENBQUMsQ0FBQyxPQUF3QixFQUEwQixFQUFFOztRQUN4RCxJQUFJLElBQUksQ0FBQzs7UUFJVCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0Qzs7UUFJRCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFFLEVBQUMsSUFBSSxFQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQ3hDLENBQUM7Q0FDTCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdba3VpRXhpc3RpbmdOYW1lXScsXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBFeGlzdGluZ05hbWVEaXJlY3RpdmUsIG11bHRpOiB0cnVlfV1cbn0pXG4vKipcbiAqIFdpdGggdGhlIEV4aXN0aW5nTmFtZURpcmVjdGl2ZSB3ZSBjb3VsZCBwcmV2ZW50IHRvIHVzZSBhbiBhbHJlYWR5IGV4aXN0aW5nIG5hbWVcbiAqIGUuZy4gZ2V0IGEgbGlzdCBvZiBhbGwgcHJvamVjdCBzaG9ydG5hbWVzLCB0aGVuIHdlIGNhbiB1c2UgdGhpcyBsaXN0IGFzIGV4aXN0aW5nIG5hbWVzXG4gKiBUT0RPOiBpbXBsZW1lbnQgcHJvamVjdHNTZXJ2aWNlLmdldEFsbFxuICovXG5leHBvcnQgY2xhc3MgRXhpc3RpbmdOYW1lRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9ycywgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBleGlzdGluZ05hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIHZhbEZuID0gVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yO1xuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBjb25zdCBjaGFuZ2UgPSBjaGFuZ2VzWydleGlzdGluZ05hbWUnXTtcbiAgICAgICAgaWYgKGNoYW5nZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsOiBzdHJpbmcgfCBSZWdFeHAgPSBjaGFuZ2UuY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcmUgPSB2YWwgaW5zdGFuY2VvZiBSZWdFeHAgPyB2YWwgOiBuZXcgUmVnRXhwKHZhbCk7XG4gICAgICAgICAgICB0aGlzLnZhbEZuID0gZXhpc3RpbmdOYW1lVmFsaWRhdG9yKHJlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsRm4gPSBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsRm4oY29udHJvbCk7XG4gICAgfVxufVxuXG4vLyB2YWxpZGF0aW9uIG9mIGV4aXN0aW5nIG5hbWUgdmFsdWVcbmV4cG9ydCBmdW5jdGlvbiBleGlzdGluZ05hbWVWYWxpZGF0b3IobmFtZVJlOiBSZWdFeHApOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcbiAgICAgICAgbGV0IG5hbWU7XG5cbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjb250cm9sLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBubyA9IG5hbWVSZS50ZXN0KG5hbWUpO1xuICAgICAgICByZXR1cm4gbm8gPyB7J2V4aXN0aW5nTmFtZSc6IHtuYW1lfX0gOiBudWxsO1xuICAgIH07XG59XG5cbi8vIHRoZSBzYW1lIGFzIGFib3ZlLCBidXQgd2l0aCBhbiBhcnJheSBsaXN0IG9mIGV4aXN0aW5nIG5hbWVzXG5leHBvcnQgZnVuY3Rpb24gZXhpc3RpbmdOYW1lc1ZhbGlkYXRvcihuYW1lQXI6IFtSZWdFeHBdKTogVmFsaWRhdG9yRm4ge1xuXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcblxuICAgICAgICBsZXQgbmFtZTtcblxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSkge1xuICAgICAgICAgICAgbmFtZSA9IGNvbnRyb2wudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBubztcbiAgICAgICAgZm9yIChjb25zdCBleGlzdGluZyBvZiBuYW1lQXIpIHtcbiAgICAgICAgICAgIG5vID0gZXhpc3RpbmcudGVzdChuYW1lKTtcbiAgICAgICAgICAgIGlmIChubykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5vKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm8gPyB7J2V4aXN0aW5nTmFtZSc6IHtuYW1lfX0gOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBubyA/IHsnZXhpc3RpbmdOYW1lJzoge25hbWV9fSA6IG51bGw7XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vdEFsbG93ZWQocGF0dGVybjogUmVnRXhwLCByZWdUeXBlOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcbiAgICAgICAgbGV0IG5hbWU7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVnVHlwZSk7XG5cbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjb250cm9sLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuYW1lKTtcblxuICAgICAgICBjb25zdCBubyA9IHBhdHRlcm4udGVzdChuYW1lKTtcbiAgICAgICAgcmV0dXJuIG5vID8ge3JlZ1R5cGU6IHtuYW1lfX0gOiBudWxsO1xuICAgIH07XG59XG4iXX0=
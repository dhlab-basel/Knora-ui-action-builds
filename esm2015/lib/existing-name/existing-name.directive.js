import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validators } from '@angular/forms';
/**
 * With the ExistingNameDirective we could prevent to use a name which has to be unique but already exists
 * e.g. get a list of all project shortnames, then we can use this list as existing names;
 * you can also use it for a list of blacklisted (not allowed) words
 */
export class ExistingNameDirective {
    constructor() {
        /**
         * @ignore
         */
        this.valFn = Validators.nullValidator;
    }
    /**
     * @ignore
     * @param changes
     */
    ngOnChanges(changes) {
        const change = changes['existingName'];
        if (change) {
            const val = change.currentValue;
            const re = val instanceof RegExp ? val : new RegExp(val);
            this.valFn = existingNameValidator(re);
        }
        else {
            this.valFn = Validators.nullValidator;
        }
    }
    /**
     * @ignore
     * @param control
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
/**
 * Validation of existing name value. String method (only one value);
 * Use it in a "formbuilder" group as a validator property
 *
 * @param {RegExp} valRegexp Only one regular expression value
 * @returns ValidatorFn
 */
export function existingNameValidator(valRegexp) {
    return (control) => {
        let name;
        if (control.value) {
            name = control.value.toLowerCase();
        }
        const no = valRegexp.test(name);
        return no ? { 'existingName': { name } } : null;
    };
}
/**
 * Validation of existing name values. Array method (list of values)
 * Use it in a "formbuilder" group as a validator property
 *
 *
 * @param {RegExp} valArrayRegexp List of regular expression values
 * @returns ValidatorFn
 */
export function existingNamesValidator(valArrayRegexp) {
    return (control) => {
        let name;
        if (control.value) {
            name = control.value.toLowerCase();
        }
        let no;
        for (const existing of valArrayRegexp) {
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
 * @ignore
 *
 * @param {RegExp} pattern
 * @param {string} regType
 * @returns ValidatorFn
 */
export function notAllowed(pattern, regType) {
    return (control) => {
        let name;
        // console.log(regType);
        if (control.value) {
            name = control.value.toLowerCase();
        }
        // console.log(name);
        const no = pattern.test(name);
        return no ? { regType: { name } } : null;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RpbmctbmFtZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvYWN0aW9uLyIsInNvdXJjZXMiOlsibGliL2V4aXN0aW5nLW5hbWUvZXhpc3RpbmctbmFtZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBbUIsYUFBYSxFQUFlLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXpGOzs7O0dBSUc7QUFDSCxNQUFNO0lBVE47UUFnQkk7O1dBRUc7UUFDSyxVQUFLLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQXdCN0MsQ0FBQztJQXRCRzs7O09BR0c7SUFDSCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxHQUFHLEdBQW9CLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDakQsTUFBTSxFQUFFLEdBQUcsR0FBRyxZQUFZLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsUUFBUSxDQUFDLE9BQXdCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUExQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQzNGOzs7MkJBV0ksS0FBSzs7QUErQlY7Ozs7OztHQU1HO0FBQ0gsTUFBTSxnQ0FBZ0MsU0FBaUI7SUFDbkQsT0FBTyxDQUFDLE9BQXdCLEVBQTBCLEVBQUU7UUFDeEQsSUFBSSxJQUFJLENBQUM7UUFFVCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QztRQUVELE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BELENBQUMsQ0FBQztBQUNOLENBQUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxpQ0FBaUMsY0FBd0I7SUFFM0QsT0FBTyxDQUFDLE9BQXdCLEVBQTBCLEVBQUU7UUFFeEQsSUFBSSxJQUFJLENBQUM7UUFFVCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QztRQUVELElBQUksRUFBRSxDQUFDO1FBQ1AsS0FBSyxNQUFNLFFBQVEsSUFBSSxjQUFjLEVBQUU7WUFDbkMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsSUFBSSxFQUFFLEVBQUU7Z0JBQ0osbUJBQW1CO2dCQUNuQixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDbkQ7U0FDSjtRQUNELE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNwRCxDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsTUFBTSxxQkFBcUIsT0FBZSxFQUFFLE9BQWU7SUFDdkQsT0FBTyxDQUFDLE9BQXdCLEVBQTBCLEVBQUU7UUFDeEQsSUFBSSxJQUFJLENBQUM7UUFFVCx3QkFBd0I7UUFFeEIsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEM7UUFFRCxxQkFBcUI7UUFFckIsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDN0MsQ0FBQyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdba3VpRXhpc3RpbmdOYW1lXScsXG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogRXhpc3RpbmdOYW1lRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZSB9XVxufSlcbi8qKlxuICogV2l0aCB0aGUgRXhpc3RpbmdOYW1lRGlyZWN0aXZlIHdlIGNvdWxkIHByZXZlbnQgdG8gdXNlIGEgbmFtZSB3aGljaCBoYXMgdG8gYmUgdW5pcXVlIGJ1dCBhbHJlYWR5IGV4aXN0c1xuICogZS5nLiBnZXQgYSBsaXN0IG9mIGFsbCBwcm9qZWN0IHNob3J0bmFtZXMsIHRoZW4gd2UgY2FuIHVzZSB0aGlzIGxpc3QgYXMgZXhpc3RpbmcgbmFtZXM7XG4gKiB5b3UgY2FuIGFsc28gdXNlIGl0IGZvciBhIGxpc3Qgb2YgYmxhY2tsaXN0ZWQgKG5vdCBhbGxvd2VkKSB3b3Jkc1xuICovXG5leHBvcnQgY2xhc3MgRXhpc3RpbmdOYW1lRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9ycywgT25DaGFuZ2VzIHtcblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBleGlzdGluZ05hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBwcml2YXRlIHZhbEZuID0gVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yO1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqIEBwYXJhbSBjaGFuZ2VzXG4gICAgICovXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBjb25zdCBjaGFuZ2UgPSBjaGFuZ2VzWydleGlzdGluZ05hbWUnXTtcbiAgICAgICAgaWYgKGNoYW5nZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsOiBzdHJpbmcgfCBSZWdFeHAgPSBjaGFuZ2UuY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcmUgPSB2YWwgaW5zdGFuY2VvZiBSZWdFeHAgPyB2YWwgOiBuZXcgUmVnRXhwKHZhbCk7XG4gICAgICAgICAgICB0aGlzLnZhbEZuID0gZXhpc3RpbmdOYW1lVmFsaWRhdG9yKHJlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsRm4gPSBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogQHBhcmFtIGNvbnRyb2xcbiAgICAgKi9cbiAgICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsRm4oY29udHJvbCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFZhbGlkYXRpb24gb2YgZXhpc3RpbmcgbmFtZSB2YWx1ZS4gU3RyaW5nIG1ldGhvZCAob25seSBvbmUgdmFsdWUpO1xuICogVXNlIGl0IGluIGEgXCJmb3JtYnVpbGRlclwiIGdyb3VwIGFzIGEgdmFsaWRhdG9yIHByb3BlcnR5XG4gKlxuICogQHBhcmFtIHtSZWdFeHB9IHZhbFJlZ2V4cCBPbmx5IG9uZSByZWd1bGFyIGV4cHJlc3Npb24gdmFsdWVcbiAqIEByZXR1cm5zIFZhbGlkYXRvckZuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGlzdGluZ05hbWVWYWxpZGF0b3IodmFsUmVnZXhwOiBSZWdFeHApOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcbiAgICAgICAgbGV0IG5hbWU7XG5cbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjb250cm9sLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBubyA9IHZhbFJlZ2V4cC50ZXN0KG5hbWUpO1xuICAgICAgICByZXR1cm4gbm8gPyB7ICdleGlzdGluZ05hbWUnOiB7IG5hbWUgfSB9IDogbnVsbDtcbiAgICB9O1xufVxuXG4vKipcbiAqIFZhbGlkYXRpb24gb2YgZXhpc3RpbmcgbmFtZSB2YWx1ZXMuIEFycmF5IG1ldGhvZCAobGlzdCBvZiB2YWx1ZXMpXG4gKiBVc2UgaXQgaW4gYSBcImZvcm1idWlsZGVyXCIgZ3JvdXAgYXMgYSB2YWxpZGF0b3IgcHJvcGVydHlcbiAqXG4gKlxuICogQHBhcmFtIHtSZWdFeHB9IHZhbEFycmF5UmVnZXhwIExpc3Qgb2YgcmVndWxhciBleHByZXNzaW9uIHZhbHVlc1xuICogQHJldHVybnMgVmFsaWRhdG9yRm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4aXN0aW5nTmFtZXNWYWxpZGF0b3IodmFsQXJyYXlSZWdleHA6IFtSZWdFeHBdKTogVmFsaWRhdG9yRm4ge1xuXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcblxuICAgICAgICBsZXQgbmFtZTtcblxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSkge1xuICAgICAgICAgICAgbmFtZSA9IGNvbnRyb2wudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBubztcbiAgICAgICAgZm9yIChjb25zdCBleGlzdGluZyBvZiB2YWxBcnJheVJlZ2V4cCkge1xuICAgICAgICAgICAgbm8gPSBleGlzdGluZy50ZXN0KG5hbWUpO1xuICAgICAgICAgICAgaWYgKG5vKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobm8pO1xuICAgICAgICAgICAgICAgIHJldHVybiBubyA/IHsgJ2V4aXN0aW5nTmFtZSc6IHsgbmFtZSB9IH0gOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBubyA/IHsgJ2V4aXN0aW5nTmFtZSc6IHsgbmFtZSB9IH0gOiBudWxsO1xuICAgIH07XG59XG5cbi8qKlxuICogQGlnbm9yZVxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVnVHlwZVxuICogQHJldHVybnMgVmFsaWRhdG9yRm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdEFsbG93ZWQocGF0dGVybjogUmVnRXhwLCByZWdUeXBlOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcbiAgICAgICAgbGV0IG5hbWU7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVnVHlwZSk7XG5cbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjb250cm9sLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuYW1lKTtcblxuICAgICAgICBjb25zdCBubyA9IHBhdHRlcm4udGVzdChuYW1lKTtcbiAgICAgICAgcmV0dXJuIG5vID8geyByZWdUeXBlOiB7IG5hbWUgfSB9IDogbnVsbDtcbiAgICB9O1xufVxuIl19
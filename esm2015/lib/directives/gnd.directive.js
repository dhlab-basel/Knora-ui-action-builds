/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { KnoraConstants } from '@knora/core';
/**
 * This directive renders a GND/IAF or a VIAF identifier as a link to the respective resolver.
 */
export class GndDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set gnd(value) {
        this._gnd = value;
    }
    /**
     * @return {?}
     */
    get gnd() {
        return this._gnd;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.gnd.length < 30) {
            if (this.gnd.indexOf(KnoraConstants.GNDPrefix) === 0) {
                // GND/IAF identifier
                this.el.nativeElement.innerHTML = `<a href="${KnoraConstants.GNDResolver + this.gnd.replace(KnoraConstants.GNDPrefix, '')}" target="_blank">${this.gnd}</a>`;
            }
            else if (this.gnd.indexOf(KnoraConstants.VIAFPrefix) === 0) {
                // VIAF identifier
                this.el.nativeElement.innerHTML = `<a href="${KnoraConstants.VIAFResolver + this.gnd.replace(KnoraConstants.VIAFPrefix, '')}" target="_blank">${this.gnd}</a>`;
            }
            else {
                // no identifier, leave unchanged
                this.el.nativeElement.innerHTML = this.gnd;
            }
        }
        else {
            // no identifier, leave unchanged
            this.el.nativeElement.innerHTML = this.gnd;
        }
    }
}
GndDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[gnd]'
            },] },
];
/** @nocollapse */
GndDirective.ctorParameters = () => [
    { type: ElementRef }
];
GndDirective.propDecorators = {
    gnd: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GndDirective.prototype._gnd;
    /** @type {?} */
    GndDirective.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ25kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9hY3Rpb24vIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9nbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFTN0MsTUFBTTs7OztJQWVGLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0tBRWpDOzs7OztJQWZELElBQ0ksR0FBRyxDQUFDLEtBQWE7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7S0FDckI7Ozs7SUFFRCxJQUFJLEdBQUc7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztLQUNwQjs7OztJQVVELFdBQVc7UUFDUCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztnQkFFbkQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLFlBQVksY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ2hLO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztnQkFFM0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLFlBQVksY0FBYyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ2xLO1lBQUMsSUFBSSxDQUFDLENBQUM7O2dCQUVKLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQzlDO1NBRUo7UUFBQyxJQUFJLENBQUMsQ0FBQzs7WUFFSixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUM5QztLQUVKOzs7WUExQ0osU0FBUyxTQUFDOztnQkFFUCxRQUFRLEVBQUUsT0FBTzthQUNwQjs7OztZQVRrQyxVQUFVOzs7a0JBWXhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEtub3JhQ29uc3RhbnRzIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG4vKipcbiAqIFRoaXMgZGlyZWN0aXZlIHJlbmRlcnMgYSBHTkQvSUFGIG9yIGEgVklBRiBpZGVudGlmaWVyIGFzIGEgbGluayB0byB0aGUgcmVzcGVjdGl2ZSByZXNvbHZlci5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICAgIHNlbGVjdG9yOiAnW2duZF0nXG59KVxuZXhwb3J0IGNsYXNzIEduZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBnbmQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9nbmQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZ25kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ25kO1xuICAgIH1cblxuXG4gICAgLy8gdGhlIEdORCBpZGVudGlmaWVyIHRvIGJlIHJlbmRlcmVkXG4gICAgcHJpdmF0ZSBfZ25kOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuZ25kLmxlbmd0aCA8IDMwKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmduZC5pbmRleE9mKEtub3JhQ29uc3RhbnRzLkdORFByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBHTkQvSUFGIGlkZW50aWZpZXJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIke0tub3JhQ29uc3RhbnRzLkdORFJlc29sdmVyICsgdGhpcy5nbmQucmVwbGFjZShLbm9yYUNvbnN0YW50cy5HTkRQcmVmaXgsICcnKX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke3RoaXMuZ25kfTwvYT5gO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmduZC5pbmRleE9mKEtub3JhQ29uc3RhbnRzLlZJQUZQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gVklBRiBpZGVudGlmaWVyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IGA8YSBocmVmPVwiJHtLbm9yYUNvbnN0YW50cy5WSUFGUmVzb2x2ZXIgKyB0aGlzLmduZC5yZXBsYWNlKEtub3JhQ29uc3RhbnRzLlZJQUZQcmVmaXgsICcnKX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke3RoaXMuZ25kfTwvYT5gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBubyBpZGVudGlmaWVyLCBsZWF2ZSB1bmNoYW5nZWRcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5nbmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vIGlkZW50aWZpZXIsIGxlYXZlIHVuY2hhbmdlZFxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuZ25kO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxufVxuIl19
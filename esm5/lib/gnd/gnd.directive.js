import { Directive, ElementRef, Input } from '@angular/core';
import { KnoraConstants } from '@knora/core';
/**
 * This directive renders a GND/IAF or a VIAF identifier as a link to the respective resolver.
 */
var GndDirective = /** @class */ (function () {
    function GndDirective(el) {
        this.el = el;
    }
    Object.defineProperty(GndDirective.prototype, "kuiGnd", {
        get: function () {
            return this._gnd;
        },
        set: function (value) {
            this._gnd = value;
        },
        enumerable: true,
        configurable: true
    });
    GndDirective.prototype.ngOnChanges = function () {
        if (this._gnd.length < 30) {
            if (this._gnd.indexOf(KnoraConstants.GNDPrefix) === 0) {
                // GND/IAF identifier
                this.el.nativeElement.innerHTML = "<a href=\"" + (KnoraConstants.GNDResolver + this._gnd.replace(KnoraConstants.GNDPrefix, '')) + "\" target=\"_blank\">" + this._gnd + "</a>";
            }
            else if (this._gnd.indexOf(KnoraConstants.VIAFPrefix) === 0) {
                // VIAF identifier
                this.el.nativeElement.innerHTML = "<a href=\"" + (KnoraConstants.VIAFResolver + this._gnd.replace(KnoraConstants.VIAFPrefix, '')) + "\" target=\"_blank\">" + this._gnd + "</a>";
            }
            else {
                // no identifier, leave unchanged
                this.el.nativeElement.innerHTML = this._gnd;
            }
        }
        else {
            // no identifier, leave unchanged
            this.el.nativeElement.innerHTML = this._gnd;
        }
    };
    GndDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[kuiGnd]'
                },] },
    ];
    /** @nocollapse */
    GndDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    GndDirective.propDecorators = {
        kuiGnd: [{ type: Input }]
    };
    return GndDirective;
}());
export { GndDirective };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ25kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9hY3Rpb24vIiwic291cmNlcyI6WyJsaWIvZ25kL2duZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTdDOztHQUVHO0FBQ0g7SUFtQkksc0JBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBRWxDLENBQUM7SUFmRCxzQkFDSSxnQ0FBTTthQUlWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzthQVBELFVBQ1csS0FBYTtZQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQWNELGtDQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXhCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxxQkFBcUI7Z0JBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxnQkFBWSxjQUFjLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLDhCQUFxQixJQUFJLENBQUMsSUFBSSxTQUFNLENBQUM7WUFDbkssQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUQsa0JBQWtCO2dCQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsZ0JBQVksY0FBYyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyw4QkFBcUIsSUFBSSxDQUFDLElBQUksU0FBTSxDQUFDO1lBQ3JLLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixpQ0FBaUM7Z0JBQ2pDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hELENBQUM7UUFFTCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixpQ0FBaUM7WUFDakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEQsQ0FBQztJQUVMLENBQUM7O2dCQTFDSixTQUFTLFNBQUM7b0JBQ1AsOENBQThDO29CQUM5QyxRQUFRLEVBQUUsVUFBVTtpQkFDdkI7Ozs7Z0JBVGtDLFVBQVU7Ozt5QkFZeEMsS0FBSzs7SUF1Q1YsbUJBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQXpDWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBLbm9yYUNvbnN0YW50cyB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSByZW5kZXJzIGEgR05EL0lBRiBvciBhIFZJQUYgaWRlbnRpZmllciBhcyBhIGxpbmsgdG8gdGhlIHJlc3BlY3RpdmUgcmVzb2x2ZXIuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ1trdWlHbmRdJ1xufSlcbmV4cG9ydCBjbGFzcyBHbmREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KClcbiAgICBzZXQga3VpR25kKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZ25kID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGt1aUduZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2duZDtcbiAgICB9XG5cblxuICAgIC8vIHRoZSBHTkQgaWRlbnRpZmllciB0byBiZSByZW5kZXJlZFxuICAgIHByaXZhdGUgX2duZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuXG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9nbmQubGVuZ3RoIDwgMzApIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2duZC5pbmRleE9mKEtub3JhQ29uc3RhbnRzLkdORFByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBHTkQvSUFGIGlkZW50aWZpZXJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIke0tub3JhQ29uc3RhbnRzLkdORFJlc29sdmVyICsgdGhpcy5fZ25kLnJlcGxhY2UoS25vcmFDb25zdGFudHMuR05EUHJlZml4LCAnJyl9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHt0aGlzLl9nbmR9PC9hPmA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2duZC5pbmRleE9mKEtub3JhQ29uc3RhbnRzLlZJQUZQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gVklBRiBpZGVudGlmaWVyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IGA8YSBocmVmPVwiJHtLbm9yYUNvbnN0YW50cy5WSUFGUmVzb2x2ZXIgKyB0aGlzLl9nbmQucmVwbGFjZShLbm9yYUNvbnN0YW50cy5WSUFGUHJlZml4LCAnJyl9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHt0aGlzLl9nbmR9PC9hPmA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vIGlkZW50aWZpZXIsIGxlYXZlIHVuY2hhbmdlZFxuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl9nbmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vIGlkZW50aWZpZXIsIGxlYXZlIHVuY2hhbmdlZFxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX2duZDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cbiJdfQ==
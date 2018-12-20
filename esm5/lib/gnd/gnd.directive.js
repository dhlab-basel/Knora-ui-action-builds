import { Directive, ElementRef, Input } from '@angular/core';
import { KnoraConstants } from '@knora/core';
/**
 * This directive renders a GND/IAF or a VIAF identifier as a link to the respective resolver.
 */
var GndDirective = /** @class */ (function () {
    function GndDirective(el) {
        this.el = el;
    }
    Object.defineProperty(GndDirective.prototype, "gnd", {
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
        if (this.gnd.length < 30) {
            if (this.gnd.indexOf(KnoraConstants.GNDPrefix) === 0) {
                // GND/IAF identifier
                this.el.nativeElement.innerHTML = "<a href=\"" + (KnoraConstants.GNDResolver + this.gnd.replace(KnoraConstants.GNDPrefix, '')) + "\" target=\"_blank\">" + this.gnd + "</a>";
            }
            else if (this.gnd.indexOf(KnoraConstants.VIAFPrefix) === 0) {
                // VIAF identifier
                this.el.nativeElement.innerHTML = "<a href=\"" + (KnoraConstants.VIAFResolver + this.gnd.replace(KnoraConstants.VIAFPrefix, '')) + "\" target=\"_blank\">" + this.gnd + "</a>";
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
        gnd: [{ type: Input }]
    };
    return GndDirective;
}());
export { GndDirective };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ25kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9hY3Rpb24vIiwic291cmNlcyI6WyJsaWIvZ25kL2duZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTdDOztHQUVHO0FBQ0g7SUFtQkksc0JBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBRWxDLENBQUM7SUFmRCxzQkFDSSw2QkFBRzthQUlQO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFQRCxVQUNRLEtBQWE7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFjRCxrQ0FBVyxHQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7WUFFdEIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNsRCxxQkFBcUI7Z0JBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxnQkFBWSxjQUFjLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLDhCQUFxQixJQUFJLENBQUMsR0FBRyxTQUFNLENBQUM7YUFDaEs7aUJBQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMxRCxrQkFBa0I7Z0JBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxnQkFBWSxjQUFjLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLDhCQUFxQixJQUFJLENBQUMsR0FBRyxTQUFNLENBQUM7YUFDbEs7aUJBQU07Z0JBQ0gsaUNBQWlDO2dCQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUM5QztTQUVKO2FBQU07WUFDSCxpQ0FBaUM7WUFDakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDOUM7SUFFTCxDQUFDOztnQkExQ0osU0FBUyxTQUFDO29CQUNQLDhDQUE4QztvQkFDOUMsUUFBUSxFQUFFLFVBQVU7aUJBQ3ZCOzs7O2dCQVRrQyxVQUFVOzs7c0JBWXhDLEtBQUs7O0lBdUNWLG1CQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7U0F6Q1ksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgS25vcmFDb25zdGFudHMgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbi8qKlxuICogVGhpcyBkaXJlY3RpdmUgcmVuZGVycyBhIEdORC9JQUYgb3IgYSBWSUFGIGlkZW50aWZpZXIgYXMgYSBsaW5rIHRvIHRoZSByZXNwZWN0aXZlIHJlc29sdmVyLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gICAgc2VsZWN0b3I6ICdba3VpR25kXSdcbn0pXG5leHBvcnQgY2xhc3MgR25kRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGduZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2duZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBnbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nbmQ7XG4gICAgfVxuXG5cbiAgICAvLyB0aGUgR05EIGlkZW50aWZpZXIgdG8gYmUgcmVuZGVyZWRcbiAgICBwcml2YXRlIF9nbmQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcblxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICBpZiAodGhpcy5nbmQubGVuZ3RoIDwgMzApIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZ25kLmluZGV4T2YoS25vcmFDb25zdGFudHMuR05EUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIEdORC9JQUYgaWRlbnRpZmllclxuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSBgPGEgaHJlZj1cIiR7S25vcmFDb25zdGFudHMuR05EUmVzb2x2ZXIgKyB0aGlzLmduZC5yZXBsYWNlKEtub3JhQ29uc3RhbnRzLkdORFByZWZpeCwgJycpfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7dGhpcy5nbmR9PC9hPmA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ25kLmluZGV4T2YoS25vcmFDb25zdGFudHMuVklBRlByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBWSUFGIGlkZW50aWZpZXJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIke0tub3JhQ29uc3RhbnRzLlZJQUZSZXNvbHZlciArIHRoaXMuZ25kLnJlcGxhY2UoS25vcmFDb25zdGFudHMuVklBRlByZWZpeCwgJycpfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7dGhpcy5nbmR9PC9hPmA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vIGlkZW50aWZpZXIsIGxlYXZlIHVuY2hhbmdlZFxuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmduZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm8gaWRlbnRpZmllciwgbGVhdmUgdW5jaGFuZ2VkXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5nbmQ7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG59XG4iXX0=
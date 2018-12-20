import { Directive, ElementRef, Input } from '@angular/core';
import { KnoraConstants } from '@knora/core';
/**
 * This directive renders a GND/IAF or a VIAF identifier as a link to the respective resolver.
 */
export class GndDirective {
    constructor(el) {
        this.el = el;
    }
    set gnd(value) {
        this._gnd = value;
    }
    get gnd() {
        return this._gnd;
    }
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
                selector: '[kuiGnd]'
            },] },
];
/** @nocollapse */
GndDirective.ctorParameters = () => [
    { type: ElementRef }
];
GndDirective.propDecorators = {
    gnd: [{ type: Input }]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ25kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9hY3Rpb24vIiwic291cmNlcyI6WyJsaWIvZ25kL2duZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTdDOztHQUVHO0FBS0gsTUFBTTtJQWVGLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBRWxDLENBQUM7SUFmRCxJQUNJLEdBQUcsQ0FBQyxLQUFhO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQVVELFdBQVc7UUFDUCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUV0QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xELHFCQUFxQjtnQkFDckIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLFlBQVksY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ2hLO2lCQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUQsa0JBQWtCO2dCQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsWUFBWSxjQUFjLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLHFCQUFxQixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDbEs7aUJBQU07Z0JBQ0gsaUNBQWlDO2dCQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUM5QztTQUVKO2FBQU07WUFDSCxpQ0FBaUM7WUFDakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDOUM7SUFFTCxDQUFDOzs7WUExQ0osU0FBUyxTQUFDO2dCQUNQLDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLFVBQVU7YUFDdkI7Ozs7WUFUa0MsVUFBVTs7O2tCQVl4QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBLbm9yYUNvbnN0YW50cyB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSByZW5kZXJzIGEgR05EL0lBRiBvciBhIFZJQUYgaWRlbnRpZmllciBhcyBhIGxpbmsgdG8gdGhlIHJlc3BlY3RpdmUgcmVzb2x2ZXIuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ1trdWlHbmRdJ1xufSlcbmV4cG9ydCBjbGFzcyBHbmREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgZ25kKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZ25kID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGduZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2duZDtcbiAgICB9XG5cblxuICAgIC8vIHRoZSBHTkQgaWRlbnRpZmllciB0byBiZSByZW5kZXJlZFxuICAgIHByaXZhdGUgX2duZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuXG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmduZC5sZW5ndGggPCAzMCkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5nbmQuaW5kZXhPZihLbm9yYUNvbnN0YW50cy5HTkRQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gR05EL0lBRiBpZGVudGlmaWVyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IGA8YSBocmVmPVwiJHtLbm9yYUNvbnN0YW50cy5HTkRSZXNvbHZlciArIHRoaXMuZ25kLnJlcGxhY2UoS25vcmFDb25zdGFudHMuR05EUHJlZml4LCAnJyl9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHt0aGlzLmduZH08L2E+YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5nbmQuaW5kZXhPZihLbm9yYUNvbnN0YW50cy5WSUFGUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIFZJQUYgaWRlbnRpZmllclxuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSBgPGEgaHJlZj1cIiR7S25vcmFDb25zdGFudHMuVklBRlJlc29sdmVyICsgdGhpcy5nbmQucmVwbGFjZShLbm9yYUNvbnN0YW50cy5WSUFGUHJlZml4LCAnJyl9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHt0aGlzLmduZH08L2E+YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbm8gaWRlbnRpZmllciwgbGVhdmUgdW5jaGFuZ2VkXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuZ25kO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBubyBpZGVudGlmaWVyLCBsZWF2ZSB1bmNoYW5nZWRcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmduZDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { AdminImageConfig } from './admin-image.config';
/**
 * You can use the admin image module for user avatar together with gravatar.com and for project logos. The feature of this module ist the error handling. In case of a 404 error of the image source (img src) the module shows a default image-not-found image. Or — in case of user — a default user profile icon, or — in case of project — a default project icon.
 */
var AdminImageDirective = /** @class */ (function () {
    function AdminImageDirective(_renderer, _ele) {
        this._renderer = _renderer;
        this._ele = _ele;
        this.onError = AdminImageConfig.defaultNotFound;
    }
    /**
     * @return {?}
     */
    AdminImageDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.source = this.image;
        switch (this.type) {
            case 'user':
                if (this.image === null || this.image === undefined) {
                    this.source = AdminImageConfig.defaultUser;
                }
                else {
                    this.source = 'http://www.gravatar.com/avatar/' + Md5.hashStr(this.image) + '?d=mp';
                }
                break;
            case 'project':
                if (this.image === null || this.image === undefined) {
                    this.source = AdminImageConfig.defaultProject;
                }
                break;
            default:
                this.source = this.image;
        }
        this._renderer.setAttribute(this._ele.nativeElement, 'src', this.source);
        this._renderer.setAttribute(this._ele.nativeElement, 'onError', 'this.src=\'' + this.onError + '\'');
    };
    AdminImageDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[kuiAdminImage]'
                },] },
    ];
    /** @nocollapse */
    AdminImageDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    AdminImageDirective.propDecorators = {
        image: [{ type: Input }],
        type: [{ type: Input }]
    };
    return AdminImageDirective;
}());
export { AdminImageDirective };
if (false) {
    /** @type {?} */
    AdminImageDirective.prototype.image;
    /** @type {?} */
    AdminImageDirective.prototype.type;
    /** @type {?} */
    AdminImageDirective.prototype.source;
    /** @type {?} */
    AdminImageDirective.prototype.onError;
    /** @type {?} */
    AdminImageDirective.prototype._renderer;
    /** @type {?} */
    AdminImageDirective.prototype._ele;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4taW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2FjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hZG1pbi1pbWFnZS9hZG1pbi1pbWFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkYsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztJQWlCcEQsNkJBQW9CLFNBQW9CLEVBQ3BCO1FBREEsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixTQUFJLEdBQUosSUFBSTt1QkFITixnQkFBZ0IsQ0FBQyxlQUFlO0tBSWpEOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBRUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXpCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRWhCLEtBQUssTUFBTTtnQkFDUCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO2lCQUM5QztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixJQUFJLENBQUMsTUFBTSxHQUFHLGlDQUFpQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDdkY7Z0JBRUQsS0FBSyxDQUFDO1lBRVYsS0FBSyxTQUFTO2dCQUVWLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFFbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7aUJBQ2pEO2dCQUVELEtBQUssQ0FBQztZQUVWO2dCQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO0tBRXhHOztnQkE5Q0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzlCOzs7O2dCQVhpRCxTQUFTO2dCQUF2QyxVQUFVOzs7d0JBY3pCLEtBQUs7dUJBQ0wsS0FBSzs7OEJBZlY7O1NBWWEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWQ1IH0gZnJvbSAndHMtbWQ1L2Rpc3QvbWQ1JztcbmltcG9ydCB7IEFkbWluSW1hZ2VDb25maWcgfSBmcm9tICcuL2FkbWluLWltYWdlLmNvbmZpZyc7XG5cblxuLyoqXG4gKiBZb3UgY2FuIHVzZSB0aGUgYWRtaW4gaW1hZ2UgbW9kdWxlIGZvciB1c2VyIGF2YXRhciB0b2dldGhlciB3aXRoIGdyYXZhdGFyLmNvbSBhbmQgZm9yIHByb2plY3QgbG9nb3MuIFRoZSBmZWF0dXJlIG9mIHRoaXMgbW9kdWxlIGlzdCB0aGUgZXJyb3IgaGFuZGxpbmcuIEluIGNhc2Ugb2YgYSA0MDQgZXJyb3Igb2YgdGhlIGltYWdlIHNvdXJjZSAoaW1nIHNyYykgdGhlIG1vZHVsZSBzaG93cyBhIGRlZmF1bHQgaW1hZ2Utbm90LWZvdW5kIGltYWdlLiBPciDigJQgaW4gY2FzZSBvZiB1c2VyIOKAlCBhIGRlZmF1bHQgdXNlciBwcm9maWxlIGljb24sIG9yIOKAlCBpbiBjYXNlIG9mIHByb2plY3Qg4oCUIGEgZGVmYXVsdCBwcm9qZWN0IGljb24uXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2t1aUFkbWluSW1hZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBBZG1pbkltYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuXG4gICAgc291cmNlOiBzdHJpbmc7XG4gICAgb25FcnJvcjogc3RyaW5nID0gQWRtaW5JbWFnZUNvbmZpZy5kZWZhdWx0Tm90Rm91bmQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2VsZTogRWxlbWVudFJlZikge1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuXG4gICAgICAgIHRoaXMuc291cmNlID0gdGhpcy5pbWFnZTtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlICd1c2VyJzpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbWFnZSA9PT0gbnVsbCB8fCB0aGlzLmltYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBBZG1pbkltYWdlQ29uZmlnLmRlZmF1bHRVc2VyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlID0gJ2h0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci8nICsgTWQ1Lmhhc2hTdHIodGhpcy5pbWFnZSkgKyAnP2Q9bXAnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmltYWdlID09PSBudWxsIHx8IHRoaXMuaW1hZ2UgPT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlID0gQWRtaW5JbWFnZUNvbmZpZy5kZWZhdWx0UHJvamVjdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHRoaXMuaW1hZ2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5fZWxlLm5hdGl2ZUVsZW1lbnQsICdzcmMnLCB0aGlzLnNvdXJjZSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbGUubmF0aXZlRWxlbWVudCwgJ29uRXJyb3InLCAndGhpcy5zcmM9XFwnJyArIHRoaXMub25FcnJvciArICdcXCcnKTtcblxuICAgIH1cblxufVxuIl19
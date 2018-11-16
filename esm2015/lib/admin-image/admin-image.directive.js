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
export class AdminImageDirective {
    /**
     * @param {?} _renderer
     * @param {?} _ele
     */
    constructor(_renderer, _ele) {
        this._renderer = _renderer;
        this._ele = _ele;
        this.onError = AdminImageConfig.defaultNotFound;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
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
    }
}
AdminImageDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kuiAdminImage]'
            },] },
];
/** @nocollapse */
AdminImageDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
AdminImageDirective.propDecorators = {
    image: [{ type: Input }],
    type: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4taW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2FjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hZG1pbi1pbWFnZS9hZG1pbi1pbWFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkYsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBU3hELE1BQU07Ozs7O0lBUUYsWUFBb0IsU0FBb0IsRUFDcEI7UUFEQSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFNBQUksR0FBSixJQUFJO3VCQUhOLGdCQUFnQixDQUFDLGVBQWU7S0FJakQ7Ozs7SUFFRCxXQUFXO1FBRVAsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXpCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRWhCLEtBQUssTUFBTTtnQkFDUCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO2lCQUM5QztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixJQUFJLENBQUMsTUFBTSxHQUFHLGlDQUFpQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDdkY7Z0JBRUQsS0FBSyxDQUFDO1lBRVYsS0FBSyxTQUFTO2dCQUVWLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFFbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7aUJBQ2pEO2dCQUVELEtBQUssQ0FBQztZQUVWO2dCQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO0tBRXhHOzs7WUE5Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7YUFDOUI7Ozs7WUFYaUQsU0FBUztZQUF2QyxVQUFVOzs7b0JBY3pCLEtBQUs7bUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1kNSB9IGZyb20gJ3RzLW1kNS9kaXN0L21kNSc7XG5pbXBvcnQgeyBBZG1pbkltYWdlQ29uZmlnIH0gZnJvbSAnLi9hZG1pbi1pbWFnZS5jb25maWcnO1xuXG5cbi8qKlxuICogWW91IGNhbiB1c2UgdGhlIGFkbWluIGltYWdlIG1vZHVsZSBmb3IgdXNlciBhdmF0YXIgdG9nZXRoZXIgd2l0aCBncmF2YXRhci5jb20gYW5kIGZvciBwcm9qZWN0IGxvZ29zLiBUaGUgZmVhdHVyZSBvZiB0aGlzIG1vZHVsZSBpc3QgdGhlIGVycm9yIGhhbmRsaW5nLiBJbiBjYXNlIG9mIGEgNDA0IGVycm9yIG9mIHRoZSBpbWFnZSBzb3VyY2UgKGltZyBzcmMpIHRoZSBtb2R1bGUgc2hvd3MgYSBkZWZhdWx0IGltYWdlLW5vdC1mb3VuZCBpbWFnZS4gT3Ig4oCUIGluIGNhc2Ugb2YgdXNlciDigJQgYSBkZWZhdWx0IHVzZXIgcHJvZmlsZSBpY29uLCBvciDigJQgaW4gY2FzZSBvZiBwcm9qZWN0IOKAlCBhIGRlZmF1bHQgcHJvamVjdCBpY29uLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1trdWlBZG1pbkltYWdlXSdcbn0pXG5leHBvcnQgY2xhc3MgQWRtaW5JbWFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKSBpbWFnZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcblxuICAgIHNvdXJjZTogc3RyaW5nO1xuICAgIG9uRXJyb3I6IHN0cmluZyA9IEFkbWluSW1hZ2VDb25maWcuZGVmYXVsdE5vdEZvdW5kO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9lbGU6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcblxuICAgICAgICB0aGlzLnNvdXJjZSA9IHRoaXMuaW1hZ2U7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSAndXNlcic6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2UgPT09IG51bGwgfHwgdGhpcy5pbWFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlID0gQWRtaW5JbWFnZUNvbmZpZy5kZWZhdWx0VXNlcjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZSA9ICdodHRwOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvJyArIE1kNS5oYXNoU3RyKHRoaXMuaW1hZ2UpICsgJz9kPW1wJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbWFnZSA9PT0gbnVsbCB8fCB0aGlzLmltYWdlID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZSA9IEFkbWluSW1hZ2VDb25maWcuZGVmYXVsdFByb2plY3Q7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLmltYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsZS5uYXRpdmVFbGVtZW50LCAnc3JjJywgdGhpcy5zb3VyY2UpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5fZWxlLm5hdGl2ZUVsZW1lbnQsICdvbkVycm9yJywgJ3RoaXMuc3JjPVxcJycgKyB0aGlzLm9uRXJyb3IgKyAnXFwnJyk7XG5cbiAgICB9XG5cbn1cbiJdfQ==
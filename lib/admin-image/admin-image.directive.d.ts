import { ElementRef, OnChanges, Renderer2 } from '@angular/core';
/**
 * You can use the admin image module for user avatar together with gravatar.com and for project logos. The feature of this module ist the error handling. In case of a 404 error of the image source (img src) the module shows a default image-not-found image. Or — in case of user — a default user profile icon, or — in case of project — a default project icon.
 */
export declare class AdminImageDirective implements OnChanges {
    private _renderer;
    private _ele;
    image: string;
    type: string;
    source: string;
    onError: string;
    constructor(_renderer: Renderer2, _ele: ElementRef);
    ngOnChanges(): void;
}

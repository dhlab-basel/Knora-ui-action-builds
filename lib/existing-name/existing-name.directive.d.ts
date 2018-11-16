import { OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
export declare class ExistingNameDirective implements Validators, OnChanges {
    existingName: string;
    private valFn;
    ngOnChanges(changes: SimpleChanges): void;
    validate(control: AbstractControl): {
        [key: string]: any;
    };
}
export declare function existingNameValidator(nameRe: RegExp): ValidatorFn;
export declare function existingNamesValidator(nameAr: [RegExp]): ValidatorFn;
export declare function notAllowed(pattern: RegExp, regType: string): ValidatorFn;

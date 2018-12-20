import { Pipe } from '@angular/core';
/**
 * This pipe can be used for "for loops", in the case of an array with non-numeric indexes.
 * It returns the key and the value(s). In the example below the {{item.key}} contains the index value
 * and the {{item.value}} contains the value(s).
 *
 * When the value is an object with name and label, you get them with:
 * {{item.value.name}} and {{item.value.label}}
 *
 */
export class KeyPipe {
    transform(value, args) {
        const keys = [];
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    }
}
KeyPipe.decorators = [
    { type: Pipe, args: [{
                name: 'kuiKey'
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvYWN0aW9uLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2tleS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEOzs7Ozs7OztHQVFHO0FBSUgsTUFBTTtJQUVGLFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBVTtRQUM1QixNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7WUFDckIsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQzthQUM1QztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7O1lBYkosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSxRQUFRO2FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoaXMgcGlwZSBjYW4gYmUgdXNlZCBmb3IgXCJmb3IgbG9vcHNcIiwgaW4gdGhlIGNhc2Ugb2YgYW4gYXJyYXkgd2l0aCBub24tbnVtZXJpYyBpbmRleGVzLlxuICogSXQgcmV0dXJucyB0aGUga2V5IGFuZCB0aGUgdmFsdWUocykuIEluIHRoZSBleGFtcGxlIGJlbG93IHRoZSB7e2l0ZW0ua2V5fX0gY29udGFpbnMgdGhlIGluZGV4IHZhbHVlXG4gKiBhbmQgdGhlIHt7aXRlbS52YWx1ZX19IGNvbnRhaW5zIHRoZSB2YWx1ZShzKS5cbiAqXG4gKiBXaGVuIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBuYW1lIGFuZCBsYWJlbCwgeW91IGdldCB0aGVtIHdpdGg6XG4gKiB7e2l0ZW0udmFsdWUubmFtZX19IGFuZCB7e2l0ZW0udmFsdWUubGFiZWx9fVxuICpcbiAqL1xuQFBpcGUoe1xuICAgIG5hbWU6ICdrdWlLZXknXG59KVxuZXhwb3J0IGNsYXNzIEtleVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzPzogYW55KTogYW55IHtcbiAgICAgICAgY29uc3Qga2V5cyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goe2tleToga2V5LCB2YWx1ZTogdmFsdWVba2V5XX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH1cbn1cbiJdfQ==
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvYWN0aW9uLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2tleS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEOzs7Ozs7OztHQVFHO0FBSUgsTUFBTTtJQUVGLFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBVTtRQUM1QixNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDN0MsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7OztZQWJKLElBQUksU0FBQztnQkFDRixJQUFJLEVBQUUsUUFBUTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUaGlzIHBpcGUgY2FuIGJlIHVzZWQgZm9yIFwiZm9yIGxvb3BzXCIsIGluIHRoZSBjYXNlIG9mIGFuIGFycmF5IHdpdGggbm9uLW51bWVyaWMgaW5kZXhlcy5cbiAqIEl0IHJldHVybnMgdGhlIGtleSBhbmQgdGhlIHZhbHVlKHMpLiBJbiB0aGUgZXhhbXBsZSBiZWxvdyB0aGUge3tpdGVtLmtleX19IGNvbnRhaW5zIHRoZSBpbmRleCB2YWx1ZVxuICogYW5kIHRoZSB7e2l0ZW0udmFsdWV9fSBjb250YWlucyB0aGUgdmFsdWUocykuXG4gKlxuICogV2hlbiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggbmFtZSBhbmQgbGFiZWwsIHlvdSBnZXQgdGhlbSB3aXRoOlxuICoge3tpdGVtLnZhbHVlLm5hbWV9fSBhbmQge3tpdGVtLnZhbHVlLmxhYmVsfX1cbiAqXG4gKi9cbkBQaXBlKHtcbiAgICBuYW1lOiAna3VpS2V5J1xufSlcbmV4cG9ydCBjbGFzcyBLZXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKHtrZXk6IGtleSwgdmFsdWU6IHZhbHVlW2tleV19KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG59XG4iXX0=
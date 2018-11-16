/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
/**
 * This pipe can be used for "for loops", in the case of an array with non-numeric indexes.
 * it returns the key and the value and we have to use it as follow:
 *
 * *ngFor="let item of list | key"
 *
 * {{item.key}} is the index value;
 *
 * {{item.value}} are the values
 *
 * When the value is an object with name and label, you got them with:
 * {{item.value.name}} resp. {{item.value.label}}
 */
var KeyPipe = /** @class */ (function () {
    function KeyPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    KeyPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        /** @type {?} */
        var keys = [];
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    };
    KeyPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'key'
                },] },
    ];
    return KeyPipe;
}());
export { KeyPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvYWN0aW9uLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2tleS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNCbEQsMkJBQVM7Ozs7O0lBQVQsVUFBVSxLQUFVLEVBQUUsSUFBVTs7UUFDOUIsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxDQUFDLElBQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2FBQzVDO1NBQ0o7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7O2dCQWJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsS0FBSztpQkFDWjs7a0JBbkJEOztTQW9CYSxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoaXMgcGlwZSBjYW4gYmUgdXNlZCBmb3IgXCJmb3IgbG9vcHNcIiwgaW4gdGhlIGNhc2Ugb2YgYW4gYXJyYXkgd2l0aCBub24tbnVtZXJpYyBpbmRleGVzLlxuICogaXQgcmV0dXJucyB0aGUga2V5IGFuZCB0aGUgdmFsdWUgYW5kIHdlIGhhdmUgdG8gdXNlIGl0IGFzIGZvbGxvdzpcbiAqXG4gKiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBsaXN0IHwga2V5XCJcbiAqXG4gKiB7e2l0ZW0ua2V5fX0gaXMgdGhlIGluZGV4IHZhbHVlO1xuICpcbiAqIHt7aXRlbS52YWx1ZX19IGFyZSB0aGUgdmFsdWVzXG4gKlxuICogV2hlbiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggbmFtZSBhbmQgbGFiZWwsIHlvdSBnb3QgdGhlbSB3aXRoOlxuICoge3tpdGVtLnZhbHVlLm5hbWV9fSByZXNwLiB7e2l0ZW0udmFsdWUubGFiZWx9fVxuICovXG5cblxuQFBpcGUoe1xuICBuYW1lOiAna2V5J1xufSlcbmV4cG9ydCBjbGFzcyBLZXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtrZXk6IGtleSwgdmFsdWU6IHZhbHVlW2tleV19KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbiAgfVxufVxuIl19
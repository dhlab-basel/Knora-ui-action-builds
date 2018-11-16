/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ProgressIndicatorComponent = /** @class */ (function () {
    function ProgressIndicatorComponent() {
        this.color = 'primary';
    }
    /**
     * @return {?}
     */
    ProgressIndicatorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ProgressIndicatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-progress-indicator',
                    template: "<!-- this is the progress indicator for forms -->\n<div class=\"kui-progress-indicator submit\" *ngIf=\"status !== undefined; else isLoading\">\n    <!-- spinner while on load / on submit -->\n    <div class=\"on-submit\" *ngIf=\"status === 0\">\n        <div class=\"spinner\" [style.border-top-color]=\"color\" [style.border-left-color]=\"color\"></div>\n    </div>\n\n    <div>\n        <!-- bullet point before submit -->\n        <mat-icon *ngIf=\"status === -1\" class=\"before-submit\">keyboard_arrow_right</mat-icon>\n        <!-- icon 'check' when done -->\n        <mat-icon *ngIf=\"status === 1\" class=\"after-submit\" [style.color]=\"color\">done</mat-icon>\n        <!-- in case of an error -->\n        <mat-icon *ngIf=\"status === 400\" class=\"submit-error\">not_interested</mat-icon>\n    </div>\n\n</div>\n\n<!-- default case: is loading -->\n<ng-template #isLoading>\n    <div class=\"kui-progress-indicator default\">\n        <div class=\"line\">\n            <div class=\"bounce1\" [style.background-color]=\"color\"></div>\n            <div class=\"bounce2\" [style.background-color]=\"color\"></div>\n            <div class=\"bounce3\" [style.background-color]=\"color\"></div>\n        </div>\n        <div class=\"line\">\n            <div class=\"bounce3\" [style.background-color]=\"color\"></div>\n            <div class=\"bounce1\" [style.background-color]=\"color\"></div>\n            <div class=\"bounce2\" [style.background-color]=\"color\"></div>\n        </div>\n    </div>\n</ng-template>\n\n\n<!-- another variety of isLoading (in one line) -->\n<!--\n<div class=\"loading-progress-indicator\">\n    <span class=\"text\">{{text}}</span>\n    <span class=\"dot\"></span>\n    <span class=\"dot\"></span>\n    <span class=\"dot\"></span>\n    <span class=\"dot\"></span>\n    <span class=\"dot\"></span>\n    <span class=\"dot\"></span>\n</div>\n-->\n",
                    styles: [".kui-progress-indicator.default{height:56px;margin-left:auto;margin-right:auto;padding:24px 36px;top:60px;width:96px}.kui-progress-indicator.default.page-center{left:50%;position:absolute;top:39%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.kui-progress-indicator.default h1,.kui-progress-indicator.default h2,.kui-progress-indicator.default h3,.kui-progress-indicator.default p{color:#555;text-align:center}.kui-progress-indicator.default .line{margin:0 auto;text-align:center;width:70px}.kui-progress-indicator.default .line>div{-webkit-animation:1.4s ease-in-out infinite both bounce-keyframes;animation:1.4s ease-in-out infinite both bounce-keyframes;background-color:#00695c;border-radius:6px;display:inline-block;height:18px;width:18px}.kui-progress-indicator.default .line .bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.kui-progress-indicator.default .line .bounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes bounce-keyframes{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes bounce-keyframes{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.kui-progress-indicator.submit{height:32px;width:32px}.kui-progress-indicator.submit .on-submit{-webkit-animation:.7s linear infinite spinner-keyframes;animation:.7s linear infinite spinner-keyframes;height:32px;width:32px}.kui-progress-indicator.submit .on-submit .spinner{border:2px solid #00695c;border-bottom-color:transparent;border-radius:50%;border-right-color:transparent;height:28px;width:28px}.kui-progress-indicator.submit .before-submit{color:rgba(128,128,128,.8)}.kui-progress-indicator.submit .after-submit{color:#00695c}.kui-progress-indicator.submit .submit-error{color:#f44336}@-webkit-keyframes spinner-keyframes{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-keyframes{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.loading-progress-indicator{text-align:center;width:100%}.loading-progress-indicator .text{color:#00695c;font-size:12pt}.loading-progress-indicator .dot{-webkit-animation:1.4s ease-in-out infinite dot-keyframes;animation:1.4s ease-in-out infinite dot-keyframes;background-color:#00695c;border-radius:2px;display:inline-block;height:6px;margin:3px 6px 2px;width:6px}.loading-progress-indicator .dot:nth-child(2){-webkit-animation-delay:.16s;animation-delay:.16s}.loading-progress-indicator .dot:nth-child(3){-webkit-animation-delay:.32s;animation-delay:.32s}.loading-progress-indicator .dot:nth-child(4){-webkit-animation-delay:.48s;animation-delay:.48s}.loading-progress-indicator .dot:nth-child(5){-webkit-animation-delay:.64s;animation-delay:.64s}.loading-progress-indicator .dot:nth-child(6){-webkit-animation-delay:.8s;animation-delay:.8s}@-webkit-keyframes dot-keyframes{0%,100%{opacity:.4;-webkit-transform:scale(1,1);transform:scale(1,1)}50%{opacity:1;-webkit-transform:scale(1.2,1.2);transform:scale(1.2,1.2)}}@keyframes dot-keyframes{0%,100%{opacity:.4;-webkit-transform:scale(1,1);transform:scale(1,1)}50%{opacity:1;-webkit-transform:scale(1.2,1.2);transform:scale(1.2,1.2)}}"]
                },] },
    ];
    /** @nocollapse */
    ProgressIndicatorComponent.ctorParameters = function () { return []; };
    ProgressIndicatorComponent.propDecorators = {
        status: [{ type: Input }],
        color: [{ type: Input }]
    };
    return ProgressIndicatorComponent;
}());
export { ProgressIndicatorComponent };
if (false) {
    /**
     * status is a number
     * - not ready:    -1
     * - loading:       0
     * - done:          1
     *
     * - error:       400
     * @type {?}
     */
    ProgressIndicatorComponent.prototype.status;
    /** @type {?} */
    ProgressIndicatorComponent.prototype.color;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9hY3Rpb24vIiwic291cmNlcyI6WyJsaWIvcHJvZ3Jlc3MtaW5kaWNhdG9yL3Byb2dyZXNzLWluZGljYXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOztJQW1FckQ7cUJBRjBCLFNBQVM7S0FHbEM7Ozs7SUFFRCw2Q0FBUTs7O0lBQVI7S0FDQzs7Z0JBckVKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsazJEQStDYjtvQkFDRyxNQUFNLEVBQUUsQ0FBQyw2dkdBQTZ2RyxDQUFDO2lCQUMxd0c7Ozs7O3lCQVdJLEtBQUs7d0JBQ0wsS0FBSzs7cUNBakVWOztTQXNEYSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktcHJvZ3Jlc3MtaW5kaWNhdG9yJyxcbiAgICB0ZW1wbGF0ZTogYDwhLS0gdGhpcyBpcyB0aGUgcHJvZ3Jlc3MgaW5kaWNhdG9yIGZvciBmb3JtcyAtLT5cbjxkaXYgY2xhc3M9XCJrdWktcHJvZ3Jlc3MtaW5kaWNhdG9yIHN1Ym1pdFwiICpuZ0lmPVwic3RhdHVzICE9PSB1bmRlZmluZWQ7IGVsc2UgaXNMb2FkaW5nXCI+XG4gICAgPCEtLSBzcGlubmVyIHdoaWxlIG9uIGxvYWQgLyBvbiBzdWJtaXQgLS0+XG4gICAgPGRpdiBjbGFzcz1cIm9uLXN1Ym1pdFwiICpuZ0lmPVwic3RhdHVzID09PSAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyXCIgW3N0eWxlLmJvcmRlci10b3AtY29sb3JdPVwiY29sb3JcIiBbc3R5bGUuYm9yZGVyLWxlZnQtY29sb3JdPVwiY29sb3JcIj48L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXY+XG4gICAgICAgIDwhLS0gYnVsbGV0IHBvaW50IGJlZm9yZSBzdWJtaXQgLS0+XG4gICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cInN0YXR1cyA9PT0gLTFcIiBjbGFzcz1cImJlZm9yZS1zdWJtaXRcIj5rZXlib2FyZF9hcnJvd19yaWdodDwvbWF0LWljb24+XG4gICAgICAgIDwhLS0gaWNvbiAnY2hlY2snIHdoZW4gZG9uZSAtLT5cbiAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwic3RhdHVzID09PSAxXCIgY2xhc3M9XCJhZnRlci1zdWJtaXRcIiBbc3R5bGUuY29sb3JdPVwiY29sb3JcIj5kb25lPC9tYXQtaWNvbj5cbiAgICAgICAgPCEtLSBpbiBjYXNlIG9mIGFuIGVycm9yIC0tPlxuICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJzdGF0dXMgPT09IDQwMFwiIGNsYXNzPVwic3VibWl0LWVycm9yXCI+bm90X2ludGVyZXN0ZWQ8L21hdC1pY29uPlxuICAgIDwvZGl2PlxuXG48L2Rpdj5cblxuPCEtLSBkZWZhdWx0IGNhc2U6IGlzIGxvYWRpbmcgLS0+XG48bmctdGVtcGxhdGUgI2lzTG9hZGluZz5cbiAgICA8ZGl2IGNsYXNzPVwia3VpLXByb2dyZXNzLWluZGljYXRvciBkZWZhdWx0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaW5lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmNlMVwiIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbG9yXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmNlMlwiIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbG9yXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmNlM1wiIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbG9yXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdW5jZTNcIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJjb2xvclwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdW5jZTFcIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJjb2xvclwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdW5jZTJcIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJjb2xvclwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cblxuPCEtLSBhbm90aGVyIHZhcmlldHkgb2YgaXNMb2FkaW5nIChpbiBvbmUgbGluZSkgLS0+XG48IS0tXG48ZGl2IGNsYXNzPVwibG9hZGluZy1wcm9ncmVzcy1pbmRpY2F0b3JcIj5cbiAgICA8c3BhbiBjbGFzcz1cInRleHRcIj57e3RleHR9fTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImRvdFwiPjwvc3Bhbj5cbjwvZGl2PlxuLS0+XG5gLFxuICAgIHN0eWxlczogW2Aua3VpLXByb2dyZXNzLWluZGljYXRvci5kZWZhdWx0e2hlaWdodDo1NnB4O21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87cGFkZGluZzoyNHB4IDM2cHg7dG9wOjYwcHg7d2lkdGg6OTZweH0ua3VpLXByb2dyZXNzLWluZGljYXRvci5kZWZhdWx0LnBhZ2UtY2VudGVye2xlZnQ6NTAlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDozOSU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfS5rdWktcHJvZ3Jlc3MtaW5kaWNhdG9yLmRlZmF1bHQgaDEsLmt1aS1wcm9ncmVzcy1pbmRpY2F0b3IuZGVmYXVsdCBoMiwua3VpLXByb2dyZXNzLWluZGljYXRvci5kZWZhdWx0IGgzLC5rdWktcHJvZ3Jlc3MtaW5kaWNhdG9yLmRlZmF1bHQgcHtjb2xvcjojNTU1O3RleHQtYWxpZ246Y2VudGVyfS5rdWktcHJvZ3Jlc3MtaW5kaWNhdG9yLmRlZmF1bHQgLmxpbmV7bWFyZ2luOjAgYXV0bzt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDo3MHB4fS5rdWktcHJvZ3Jlc3MtaW5kaWNhdG9yLmRlZmF1bHQgLmxpbmU+ZGl2ey13ZWJraXQtYW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aCBib3VuY2Uta2V5ZnJhbWVzO2FuaW1hdGlvbjoxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGggYm91bmNlLWtleWZyYW1lcztiYWNrZ3JvdW5kLWNvbG9yOiMwMDY5NWM7Ym9yZGVyLXJhZGl1czo2cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjE4cHg7d2lkdGg6MThweH0ua3VpLXByb2dyZXNzLWluZGljYXRvci5kZWZhdWx0IC5saW5lIC5ib3VuY2Uxey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMzJzO2FuaW1hdGlvbi1kZWxheTotLjMyc30ua3VpLXByb2dyZXNzLWluZGljYXRvci5kZWZhdWx0IC5saW5lIC5ib3VuY2Uyey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMTZzO2FuaW1hdGlvbi1kZWxheTotLjE2c31ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlLWtleWZyYW1lc3swJSwxMDAlLDgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBib3VuY2Uta2V5ZnJhbWVzezAlLDEwMCUsODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX0ua3VpLXByb2dyZXNzLWluZGljYXRvci5zdWJtaXR7aGVpZ2h0OjMycHg7d2lkdGg6MzJweH0ua3VpLXByb2dyZXNzLWluZGljYXRvci5zdWJtaXQgLm9uLXN1Ym1pdHstd2Via2l0LWFuaW1hdGlvbjouN3MgbGluZWFyIGluZmluaXRlIHNwaW5uZXIta2V5ZnJhbWVzO2FuaW1hdGlvbjouN3MgbGluZWFyIGluZmluaXRlIHNwaW5uZXIta2V5ZnJhbWVzO2hlaWdodDozMnB4O3dpZHRoOjMycHh9Lmt1aS1wcm9ncmVzcy1pbmRpY2F0b3Iuc3VibWl0IC5vbi1zdWJtaXQgLnNwaW5uZXJ7Ym9yZGVyOjJweCBzb2xpZCAjMDA2OTVjO2JvcmRlci1ib3R0b20tY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyLXJpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O2hlaWdodDoyOHB4O3dpZHRoOjI4cHh9Lmt1aS1wcm9ncmVzcy1pbmRpY2F0b3Iuc3VibWl0IC5iZWZvcmUtc3VibWl0e2NvbG9yOnJnYmEoMTI4LDEyOCwxMjgsLjgpfS5rdWktcHJvZ3Jlc3MtaW5kaWNhdG9yLnN1Ym1pdCAuYWZ0ZXItc3VibWl0e2NvbG9yOiMwMDY5NWN9Lmt1aS1wcm9ncmVzcy1pbmRpY2F0b3Iuc3VibWl0IC5zdWJtaXQtZXJyb3J7Y29sb3I6I2Y0NDMzNn1ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lci1rZXlmcmFtZXN7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgc3Bpbm5lci1rZXlmcmFtZXN7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fS5sb2FkaW5nLXByb2dyZXNzLWluZGljYXRvcnt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDAlfS5sb2FkaW5nLXByb2dyZXNzLWluZGljYXRvciAudGV4dHtjb2xvcjojMDA2OTVjO2ZvbnQtc2l6ZToxMnB0fS5sb2FkaW5nLXByb2dyZXNzLWluZGljYXRvciAuZG90ey13ZWJraXQtYW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZG90LWtleWZyYW1lczthbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBkb3Qta2V5ZnJhbWVzO2JhY2tncm91bmQtY29sb3I6IzAwNjk1Yztib3JkZXItcmFkaXVzOjJweDtkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6NnB4O21hcmdpbjozcHggNnB4IDJweDt3aWR0aDo2cHh9LmxvYWRpbmctcHJvZ3Jlc3MtaW5kaWNhdG9yIC5kb3Q6bnRoLWNoaWxkKDIpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4xNnM7YW5pbWF0aW9uLWRlbGF5Oi4xNnN9LmxvYWRpbmctcHJvZ3Jlc3MtaW5kaWNhdG9yIC5kb3Q6bnRoLWNoaWxkKDMpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4zMnM7YW5pbWF0aW9uLWRlbGF5Oi4zMnN9LmxvYWRpbmctcHJvZ3Jlc3MtaW5kaWNhdG9yIC5kb3Q6bnRoLWNoaWxkKDQpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi40OHM7YW5pbWF0aW9uLWRlbGF5Oi40OHN9LmxvYWRpbmctcHJvZ3Jlc3MtaW5kaWNhdG9yIC5kb3Q6bnRoLWNoaWxkKDUpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi42NHM7YW5pbWF0aW9uLWRlbGF5Oi42NHN9LmxvYWRpbmctcHJvZ3Jlc3MtaW5kaWNhdG9yIC5kb3Q6bnRoLWNoaWxkKDYpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi44czthbmltYXRpb24tZGVsYXk6LjhzfUAtd2Via2l0LWtleWZyYW1lcyBkb3Qta2V5ZnJhbWVzezAlLDEwMCV7b3BhY2l0eTouNDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpO3RyYW5zZm9ybTpzY2FsZSgxLDEpfTUwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4yLDEuMik7dHJhbnNmb3JtOnNjYWxlKDEuMiwxLjIpfX1Aa2V5ZnJhbWVzIGRvdC1rZXlmcmFtZXN7MCUsMTAwJXtvcGFjaXR5Oi40Oy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsMSk7dHJhbnNmb3JtOnNjYWxlKDEsMSl9NTAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjIsMS4yKTt0cmFuc2Zvcm06c2NhbGUoMS4yLDEuMil9fWBdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzSW5kaWNhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIC8qKlxuICAgICAqIHN0YXR1cyBpcyBhIG51bWJlclxuICAgICAqIC0gbm90IHJlYWR5OiAgICAtMVxuICAgICAqIC0gbG9hZGluZzogICAgICAgMFxuICAgICAqIC0gZG9uZTogICAgICAgICAgMVxuICAgICAqXG4gICAgICogLSBlcnJvcjogICAgICAgNDAwXG4gICAgICovXG4gICAgQElucHV0KCkgc3RhdHVzPzogbnVtYmVyO1xuICAgIEBJbnB1dCgpIGNvbG9yPzogc3RyaW5nID0gJ3ByaW1hcnknO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG59XG4iXX0=
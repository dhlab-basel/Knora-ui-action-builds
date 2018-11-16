/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ProgressIndicatorComponent {
    constructor() {
        this.color = 'primary';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ProgressIndicatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-progress-indicator',
                template: `<!-- this is the progress indicator for forms -->
<div class="kui-progress-indicator submit" *ngIf="status !== undefined; else isLoading">
    <!-- spinner while on load / on submit -->
    <div class="on-submit" *ngIf="status === 0">
        <div class="spinner" [style.border-top-color]="color" [style.border-left-color]="color"></div>
    </div>

    <div>
        <!-- bullet point before submit -->
        <mat-icon *ngIf="status === -1" class="before-submit">keyboard_arrow_right</mat-icon>
        <!-- icon 'check' when done -->
        <mat-icon *ngIf="status === 1" class="after-submit" [style.color]="color">done</mat-icon>
        <!-- in case of an error -->
        <mat-icon *ngIf="status === 400" class="submit-error">not_interested</mat-icon>
    </div>

</div>

<!-- default case: is loading -->
<ng-template #isLoading>
    <div class="kui-progress-indicator default">
        <div class="line">
            <div class="bounce1" [style.background-color]="color"></div>
            <div class="bounce2" [style.background-color]="color"></div>
            <div class="bounce3" [style.background-color]="color"></div>
        </div>
        <div class="line">
            <div class="bounce3" [style.background-color]="color"></div>
            <div class="bounce1" [style.background-color]="color"></div>
            <div class="bounce2" [style.background-color]="color"></div>
        </div>
    </div>
</ng-template>


<!-- another variety of isLoading (in one line) -->
<!--
<div class="loading-progress-indicator">
    <span class="text">{{text}}</span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</div>
-->
`,
                styles: [`.kui-progress-indicator.default{height:56px;margin-left:auto;margin-right:auto;padding:24px 36px;top:60px;width:96px}.kui-progress-indicator.default.page-center{left:50%;position:absolute;top:39%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.kui-progress-indicator.default h1,.kui-progress-indicator.default h2,.kui-progress-indicator.default h3,.kui-progress-indicator.default p{color:#555;text-align:center}.kui-progress-indicator.default .line{margin:0 auto;text-align:center;width:70px}.kui-progress-indicator.default .line>div{-webkit-animation:1.4s ease-in-out infinite both bounce-keyframes;animation:1.4s ease-in-out infinite both bounce-keyframes;background-color:#00695c;border-radius:6px;display:inline-block;height:18px;width:18px}.kui-progress-indicator.default .line .bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.kui-progress-indicator.default .line .bounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes bounce-keyframes{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes bounce-keyframes{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.kui-progress-indicator.submit{height:32px;width:32px}.kui-progress-indicator.submit .on-submit{-webkit-animation:.7s linear infinite spinner-keyframes;animation:.7s linear infinite spinner-keyframes;height:32px;width:32px}.kui-progress-indicator.submit .on-submit .spinner{border:2px solid #00695c;border-bottom-color:transparent;border-radius:50%;border-right-color:transparent;height:28px;width:28px}.kui-progress-indicator.submit .before-submit{color:rgba(128,128,128,.8)}.kui-progress-indicator.submit .after-submit{color:#00695c}.kui-progress-indicator.submit .submit-error{color:#f44336}@-webkit-keyframes spinner-keyframes{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-keyframes{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.loading-progress-indicator{text-align:center;width:100%}.loading-progress-indicator .text{color:#00695c;font-size:12pt}.loading-progress-indicator .dot{-webkit-animation:1.4s ease-in-out infinite dot-keyframes;animation:1.4s ease-in-out infinite dot-keyframes;background-color:#00695c;border-radius:2px;display:inline-block;height:6px;margin:3px 6px 2px;width:6px}.loading-progress-indicator .dot:nth-child(2){-webkit-animation-delay:.16s;animation-delay:.16s}.loading-progress-indicator .dot:nth-child(3){-webkit-animation-delay:.32s;animation-delay:.32s}.loading-progress-indicator .dot:nth-child(4){-webkit-animation-delay:.48s;animation-delay:.48s}.loading-progress-indicator .dot:nth-child(5){-webkit-animation-delay:.64s;animation-delay:.64s}.loading-progress-indicator .dot:nth-child(6){-webkit-animation-delay:.8s;animation-delay:.8s}@-webkit-keyframes dot-keyframes{0%,100%{opacity:.4;-webkit-transform:scale(1,1);transform:scale(1,1)}50%{opacity:1;-webkit-transform:scale(1.2,1.2);transform:scale(1.2,1.2)}}@keyframes dot-keyframes{0%,100%{opacity:.4;-webkit-transform:scale(1,1);transform:scale(1,1)}50%{opacity:1;-webkit-transform:scale(1.2,1.2);transform:scale(1.2,1.2)}}`]
            },] },
];
/** @nocollapse */
ProgressIndicatorComponent.ctorParameters = () => [];
ProgressIndicatorComponent.propDecorators = {
    status: [{ type: Input }],
    color: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9hY3Rpb24vIiwic291cmNlcyI6WyJsaWIvcHJvZ3Jlc3MtaW5kaWNhdG9yL3Byb2dyZXNzLWluZGljYXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBc0R6RCxNQUFNO0lBYUY7cUJBRjBCLFNBQVM7S0FHbEM7Ozs7SUFFRCxRQUFRO0tBQ1A7OztZQXJFSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQStDYjtnQkFDRyxNQUFNLEVBQUUsQ0FBQyw2dkdBQTZ2RyxDQUFDO2FBQzF3Rzs7Ozs7cUJBV0ksS0FBSztvQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLXByb2dyZXNzLWluZGljYXRvcicsXG4gICAgdGVtcGxhdGU6IGA8IS0tIHRoaXMgaXMgdGhlIHByb2dyZXNzIGluZGljYXRvciBmb3IgZm9ybXMgLS0+XG48ZGl2IGNsYXNzPVwia3VpLXByb2dyZXNzLWluZGljYXRvciBzdWJtaXRcIiAqbmdJZj1cInN0YXR1cyAhPT0gdW5kZWZpbmVkOyBlbHNlIGlzTG9hZGluZ1wiPlxuICAgIDwhLS0gc3Bpbm5lciB3aGlsZSBvbiBsb2FkIC8gb24gc3VibWl0IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJvbi1zdWJtaXRcIiAqbmdJZj1cInN0YXR1cyA9PT0gMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lclwiIFtzdHlsZS5ib3JkZXItdG9wLWNvbG9yXT1cImNvbG9yXCIgW3N0eWxlLmJvcmRlci1sZWZ0LWNvbG9yXT1cImNvbG9yXCI+PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2PlxuICAgICAgICA8IS0tIGJ1bGxldCBwb2ludCBiZWZvcmUgc3VibWl0IC0tPlxuICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJzdGF0dXMgPT09IC0xXCIgY2xhc3M9XCJiZWZvcmUtc3VibWl0XCI+a2V5Ym9hcmRfYXJyb3dfcmlnaHQ8L21hdC1pY29uPlxuICAgICAgICA8IS0tIGljb24gJ2NoZWNrJyB3aGVuIGRvbmUgLS0+XG4gICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cInN0YXR1cyA9PT0gMVwiIGNsYXNzPVwiYWZ0ZXItc3VibWl0XCIgW3N0eWxlLmNvbG9yXT1cImNvbG9yXCI+ZG9uZTwvbWF0LWljb24+XG4gICAgICAgIDwhLS0gaW4gY2FzZSBvZiBhbiBlcnJvciAtLT5cbiAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwic3RhdHVzID09PSA0MDBcIiBjbGFzcz1cInN1Ym1pdC1lcnJvclwiPm5vdF9pbnRlcmVzdGVkPC9tYXQtaWNvbj5cbiAgICA8L2Rpdj5cblxuPC9kaXY+XG5cbjwhLS0gZGVmYXVsdCBjYXNlOiBpcyBsb2FkaW5nIC0tPlxuPG5nLXRlbXBsYXRlICNpc0xvYWRpbmc+XG4gICAgPGRpdiBjbGFzcz1cImt1aS1wcm9ncmVzcy1pbmRpY2F0b3IgZGVmYXVsdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdW5jZTFcIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJjb2xvclwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdW5jZTJcIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJjb2xvclwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdW5jZTNcIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJjb2xvclwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3VuY2UzXCIgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sb3JcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3VuY2UxXCIgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sb3JcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3VuY2UyXCIgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sb3JcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuXG5cbjwhLS0gYW5vdGhlciB2YXJpZXR5IG9mIGlzTG9hZGluZyAoaW4gb25lIGxpbmUpIC0tPlxuPCEtLVxuPGRpdiBjbGFzcz1cImxvYWRpbmctcHJvZ3Jlc3MtaW5kaWNhdG9yXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+e3t0ZXh0fX08L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+XG48L2Rpdj5cbi0tPlxuYCxcbiAgICBzdHlsZXM6IFtgLmt1aS1wcm9ncmVzcy1pbmRpY2F0b3IuZGVmYXVsdHtoZWlnaHQ6NTZweDttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO3BhZGRpbmc6MjRweCAzNnB4O3RvcDo2MHB4O3dpZHRoOjk2cHh9Lmt1aS1wcm9ncmVzcy1pbmRpY2F0b3IuZGVmYXVsdC5wYWdlLWNlbnRlcntsZWZ0OjUwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MzklOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKX0ua3VpLXByb2dyZXNzLWluZGljYXRvci5kZWZhdWx0IGgxLC5rdWktcHJvZ3Jlc3MtaW5kaWNhdG9yLmRlZmF1bHQgaDIsLmt1aS1wcm9ncmVzcy1pbmRpY2F0b3IuZGVmYXVsdCBoMywua3VpLXByb2dyZXNzLWluZGljYXRvci5kZWZhdWx0IHB7Y29sb3I6IzU1NTt0ZXh0LWFsaWduOmNlbnRlcn0ua3VpLXByb2dyZXNzLWluZGljYXRvci5kZWZhdWx0IC5saW5le21hcmdpbjowIGF1dG87dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6NzBweH0ua3VpLXByb2dyZXNzLWluZGljYXRvci5kZWZhdWx0IC5saW5lPmRpdnstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGggYm91bmNlLWtleWZyYW1lczthbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoIGJvdW5jZS1rZXlmcmFtZXM7YmFja2dyb3VuZC1jb2xvcjojMDA2OTVjO2JvcmRlci1yYWRpdXM6NnB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDoxOHB4O3dpZHRoOjE4cHh9Lmt1aS1wcm9ncmVzcy1pbmRpY2F0b3IuZGVmYXVsdCAubGluZSAuYm91bmNlMXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjMyczthbmltYXRpb24tZGVsYXk6LS4zMnN9Lmt1aS1wcm9ncmVzcy1pbmRpY2F0b3IuZGVmYXVsdCAubGluZSAuYm91bmNlMnstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjE2czthbmltYXRpb24tZGVsYXk6LS4xNnN9QC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZS1rZXlmcmFtZXN7MCUsMTAwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfTQwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgYm91bmNlLWtleWZyYW1lc3swJSwxMDAlLDgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19Lmt1aS1wcm9ncmVzcy1pbmRpY2F0b3Iuc3VibWl0e2hlaWdodDozMnB4O3dpZHRoOjMycHh9Lmt1aS1wcm9ncmVzcy1pbmRpY2F0b3Iuc3VibWl0IC5vbi1zdWJtaXR7LXdlYmtpdC1hbmltYXRpb246LjdzIGxpbmVhciBpbmZpbml0ZSBzcGlubmVyLWtleWZyYW1lczthbmltYXRpb246LjdzIGxpbmVhciBpbmZpbml0ZSBzcGlubmVyLWtleWZyYW1lcztoZWlnaHQ6MzJweDt3aWR0aDozMnB4fS5rdWktcHJvZ3Jlc3MtaW5kaWNhdG9yLnN1Ym1pdCAub24tc3VibWl0IC5zcGlubmVye2JvcmRlcjoycHggc29saWQgIzAwNjk1Yztib3JkZXItYm90dG9tLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlci1yaWdodC1jb2xvcjp0cmFuc3BhcmVudDtoZWlnaHQ6MjhweDt3aWR0aDoyOHB4fS5rdWktcHJvZ3Jlc3MtaW5kaWNhdG9yLnN1Ym1pdCAuYmVmb3JlLXN1Ym1pdHtjb2xvcjpyZ2JhKDEyOCwxMjgsMTI4LC44KX0ua3VpLXByb2dyZXNzLWluZGljYXRvci5zdWJtaXQgLmFmdGVyLXN1Ym1pdHtjb2xvcjojMDA2OTVjfS5rdWktcHJvZ3Jlc3MtaW5kaWNhdG9yLnN1Ym1pdCAuc3VibWl0LWVycm9ye2NvbG9yOiNmNDQzMzZ9QC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXIta2V5ZnJhbWVzezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHNwaW5uZXIta2V5ZnJhbWVzezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0ubG9hZGluZy1wcm9ncmVzcy1pbmRpY2F0b3J7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MTAwJX0ubG9hZGluZy1wcm9ncmVzcy1pbmRpY2F0b3IgLnRleHR7Y29sb3I6IzAwNjk1Yztmb250LXNpemU6MTJwdH0ubG9hZGluZy1wcm9ncmVzcy1pbmRpY2F0b3IgLmRvdHstd2Via2l0LWFuaW1hdGlvbjoxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGRvdC1rZXlmcmFtZXM7YW5pbWF0aW9uOjEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgZG90LWtleWZyYW1lcztiYWNrZ3JvdW5kLWNvbG9yOiMwMDY5NWM7Ym9yZGVyLXJhZGl1czoycHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjZweDttYXJnaW46M3B4IDZweCAycHg7d2lkdGg6NnB4fS5sb2FkaW5nLXByb2dyZXNzLWluZGljYXRvciAuZG90Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouMTZzO2FuaW1hdGlvbi1kZWxheTouMTZzfS5sb2FkaW5nLXByb2dyZXNzLWluZGljYXRvciAuZG90Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouMzJzO2FuaW1hdGlvbi1kZWxheTouMzJzfS5sb2FkaW5nLXByb2dyZXNzLWluZGljYXRvciAuZG90Om50aC1jaGlsZCg0KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouNDhzO2FuaW1hdGlvbi1kZWxheTouNDhzfS5sb2FkaW5nLXByb2dyZXNzLWluZGljYXRvciAuZG90Om50aC1jaGlsZCg1KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouNjRzO2FuaW1hdGlvbi1kZWxheTouNjRzfS5sb2FkaW5nLXByb2dyZXNzLWluZGljYXRvciAuZG90Om50aC1jaGlsZCg2KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouOHM7YW5pbWF0aW9uLWRlbGF5Oi44c31ALXdlYmtpdC1rZXlmcmFtZXMgZG90LWtleWZyYW1lc3swJSwxMDAle29wYWNpdHk6LjQ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwxKTt0cmFuc2Zvcm06c2NhbGUoMSwxKX01MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMiwxLjIpO3RyYW5zZm9ybTpzY2FsZSgxLjIsMS4yKX19QGtleWZyYW1lcyBkb3Qta2V5ZnJhbWVzezAlLDEwMCV7b3BhY2l0eTouNDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpO3RyYW5zZm9ybTpzY2FsZSgxLDEpfTUwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4yLDEuMik7dHJhbnNmb3JtOnNjYWxlKDEuMiwxLjIpfX1gXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0luZGljYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAvKipcbiAgICAgKiBzdGF0dXMgaXMgYSBudW1iZXJcbiAgICAgKiAtIG5vdCByZWFkeTogICAgLTFcbiAgICAgKiAtIGxvYWRpbmc6ICAgICAgIDBcbiAgICAgKiAtIGRvbmU6ICAgICAgICAgIDFcbiAgICAgKlxuICAgICAqIC0gZXJyb3I6ICAgICAgIDQwMFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHN0YXR1cz86IG51bWJlcjtcbiAgICBASW5wdXQoKSBjb2xvcj86IHN0cmluZyA9ICdwcmltYXJ5JztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxufVxuIl19
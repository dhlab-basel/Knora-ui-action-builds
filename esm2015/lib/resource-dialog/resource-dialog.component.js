/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export class ResourceDialogComponent {
    /**
     * @param {?} _dialogRef
     * @param {?} data
     */
    constructor(_dialogRef, data) {
        this._dialogRef = _dialogRef;
        this.data = data;
        this.fullSize = false;
    }
    /**
     * Creates a configuration object for `MatDialog`.
     *
     * @param {?} resourceIri the Iri of the resource to be displayed in a dialog.
     * @param {?=} widthPct width of the dialog in percentage.
     * @param {?=} heightPct height of the dialog in percentage.
     * @return {?}
     */
    static createConfiguration(resourceIri, widthPct = 60, heightPct = 60) {
        /** @type {?} */
        const config = new MatDialogConfig();
        config.height = `${widthPct}%`;
        config.width = `${heightPct}%`;
        config.data = {
            iri: resourceIri
        };
        config.panelClass = 'resizable';
        return config;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.fullSize = (!this.data.fullSize);
        // start in full size
        if (this._dialogRef) {
            this.toggleFullSize();
        }
    }
    /**
     * @return {?}
     */
    toggleFullSize() {
        this.fullSize = (!this.fullSize);
        if (this.fullSize) {
            this._dialogRef.updateSize('100vw', '100vh');
            this._dialogRef.updatePosition();
        }
        else {
            this._dialogRef.updateSize('80vw', 'auto');
            this._dialogRef.updatePosition();
        }
    }
}
ResourceDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-resource-dialog',
                template: `<div class="object-dialog">
  <!-- header with close (on the left hand side) and resize (on the right hand side) button
      and with the title in the center -->
  <div class="dialog-header">
    <span class="dialog-action-button">
      <button mat-icon-button class="resize-button" (click)="toggleFullSize()">
        <mat-icon class="optimize-direction" [innerHtml]="fullSize ? 'call_received' :'call_made'"></mat-icon>
      </button>
    </span>
    <span class="fill-remaining-space"></span>
    <span>
      <h3 class="dialog-title" mat-dialog-title>
        Resource
        <!--'salsahLabels.frameworkForListings.add.title' | translate -->
      </h3>
    </span>
    <span class="fill-remaining-space"></span>
    <span class="dialog-action-button">
      <button mat-icon-button class="close-button" (click)="_dialogRef.close()">
        <mat-icon>close</mat-icon>
      </button>
    </span>
  </div>

  <!-- <mat-dialog-content class="dialog-content" [class.fullsize]="fullSize">

      <salsah-resource-object [iri]="data.iri"></salsah-resource-object>

  </mat-dialog-content> -->

</div>`,
                styles: [``]
            },] },
];
/** @nocollapse */
ResourceDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    ResourceDialogComponent.prototype.fullSize;
    /** @type {?} */
    ResourceDialogComponent.prototype._dialogRef;
    /** @type {?} */
    ResourceDialogComponent.prototype.data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9hY3Rpb24vIiwic291cmNlcyI6WyJsaWIvcmVzb3VyY2UtZGlhbG9nL3Jlc291cmNlLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBcUNuRixNQUFNOzs7OztJQTRCSixZQUFtQixVQUFpRCxFQUNsQyxJQUFTO1FBRHhCLGVBQVUsR0FBVixVQUFVLENBQXVDO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQUs7d0JBM0J2QixLQUFLO0tBNEJ4Qjs7Ozs7Ozs7O0lBbEJELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFtQixFQUFFLFdBQW1CLEVBQUUsRUFBRSxZQUFvQixFQUFFOztRQUUzRixNQUFNLE1BQU0sR0FBb0IsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUV0RCxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsUUFBUSxHQUFHLENBQUM7UUFDL0IsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLFNBQVMsR0FBRyxDQUFDO1FBRS9CLE1BQU0sQ0FBQyxJQUFJLEdBQUc7WUFDWixHQUFHLEVBQUUsV0FBVztTQUNqQixDQUFDO1FBRUYsTUFBTSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7UUFFaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNmOzs7O0lBTUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7O1FBR3RDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtLQUNGOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNsQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDbEM7S0FDRjs7O1lBdEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQThCTDtnQkFDTCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7OztZQXBDeUIsWUFBWTs0Q0FrRWpDLE1BQU0sU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nQ29uZmlnLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXJlc291cmNlLWRpYWxvZycsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm9iamVjdC1kaWFsb2dcIj5cbiAgPCEtLSBoZWFkZXIgd2l0aCBjbG9zZSAob24gdGhlIGxlZnQgaGFuZCBzaWRlKSBhbmQgcmVzaXplIChvbiB0aGUgcmlnaHQgaGFuZCBzaWRlKSBidXR0b25cbiAgICAgIGFuZCB3aXRoIHRoZSB0aXRsZSBpbiB0aGUgY2VudGVyIC0tPlxuICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWhlYWRlclwiPlxuICAgIDxzcGFuIGNsYXNzPVwiZGlhbG9nLWFjdGlvbi1idXR0b25cIj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwicmVzaXplLWJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVGdWxsU2l6ZSgpXCI+XG4gICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm9wdGltaXplLWRpcmVjdGlvblwiIFtpbm5lckh0bWxdPVwiZnVsbFNpemUgPyAnY2FsbF9yZWNlaXZlZCcgOidjYWxsX21hZGUnXCI+PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImZpbGwtcmVtYWluaW5nLXNwYWNlXCI+PC9zcGFuPlxuICAgIDxzcGFuPlxuICAgICAgPGgzIGNsYXNzPVwiZGlhbG9nLXRpdGxlXCIgbWF0LWRpYWxvZy10aXRsZT5cbiAgICAgICAgUmVzb3VyY2VcbiAgICAgICAgPCEtLSdzYWxzYWhMYWJlbHMuZnJhbWV3b3JrRm9yTGlzdGluZ3MuYWRkLnRpdGxlJyB8IHRyYW5zbGF0ZSAtLT5cbiAgICAgIDwvaDM+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiZmlsbC1yZW1haW5pbmctc3BhY2VcIj48L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJkaWFsb2ctYWN0aW9uLWJ1dHRvblwiPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJjbG9zZS1idXR0b25cIiAoY2xpY2spPVwiX2RpYWxvZ1JlZi5jbG9zZSgpXCI+XG4gICAgICAgIDxtYXQtaWNvbj5jbG9zZTwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuXG4gIDwhLS0gPG1hdC1kaWFsb2ctY29udGVudCBjbGFzcz1cImRpYWxvZy1jb250ZW50XCIgW2NsYXNzLmZ1bGxzaXplXT1cImZ1bGxTaXplXCI+XG5cbiAgICAgIDxzYWxzYWgtcmVzb3VyY2Utb2JqZWN0IFtpcmldPVwiZGF0YS5pcmlcIj48L3NhbHNhaC1yZXNvdXJjZS1vYmplY3Q+XG5cbiAgPC9tYXQtZGlhbG9nLWNvbnRlbnQ+IC0tPlxuXG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGZ1bGxTaXplOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjb25maWd1cmF0aW9uIG9iamVjdCBmb3IgYE1hdERpYWxvZ2AuXG4gICAqXG4gICAqIEBwYXJhbSByZXNvdXJjZUlyaSB0aGUgSXJpIG9mIHRoZSByZXNvdXJjZSB0byBiZSBkaXNwbGF5ZWQgaW4gYSBkaWFsb2cuXG4gICAqIEBwYXJhbSB3aWR0aFBjdCB3aWR0aCBvZiB0aGUgZGlhbG9nIGluIHBlcmNlbnRhZ2UuXG4gICAqIEBwYXJhbSBoZWlnaHRQY3QgaGVpZ2h0IG9mIHRoZSBkaWFsb2cgaW4gcGVyY2VudGFnZS5cbiAgICogQHJldHVybnNcbiAgICovXG4gIHN0YXRpYyBjcmVhdGVDb25maWd1cmF0aW9uKHJlc291cmNlSXJpOiBzdHJpbmcsIHdpZHRoUGN0OiBudW1iZXIgPSA2MCwgaGVpZ2h0UGN0OiBudW1iZXIgPSA2MCkge1xuXG4gICAgY29uc3QgY29uZmlnOiBNYXREaWFsb2dDb25maWcgPSBuZXcgTWF0RGlhbG9nQ29uZmlnKCk7XG5cbiAgICBjb25maWcuaGVpZ2h0ID0gYCR7d2lkdGhQY3R9JWA7XG4gICAgY29uZmlnLndpZHRoID0gYCR7aGVpZ2h0UGN0fSVgO1xuXG4gICAgY29uZmlnLmRhdGEgPSB7XG4gICAgICBpcmk6IHJlc291cmNlSXJpXG4gICAgfTtcblxuICAgIGNvbmZpZy5wYW5lbENsYXNzID0gJ3Jlc2l6YWJsZSc7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIF9kaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxSZXNvdXJjZURpYWxvZ0NvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZnVsbFNpemUgPSAoIXRoaXMuZGF0YS5mdWxsU2l6ZSk7XG5cbiAgICAvLyBzdGFydCBpbiBmdWxsIHNpemVcbiAgICBpZiAodGhpcy5fZGlhbG9nUmVmKSB7XG4gICAgICB0aGlzLnRvZ2dsZUZ1bGxTaXplKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRnVsbFNpemUoKSB7XG4gICAgdGhpcy5mdWxsU2l6ZSA9ICghdGhpcy5mdWxsU2l6ZSk7XG5cbiAgICBpZiAodGhpcy5mdWxsU2l6ZSkge1xuICAgICAgdGhpcy5fZGlhbG9nUmVmLnVwZGF0ZVNpemUoJzEwMHZ3JywgJzEwMHZoJyk7XG4gICAgICB0aGlzLl9kaWFsb2dSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGlhbG9nUmVmLnVwZGF0ZVNpemUoJzgwdncnLCAnYXV0bycpO1xuICAgICAgdGhpcy5fZGlhbG9nUmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==
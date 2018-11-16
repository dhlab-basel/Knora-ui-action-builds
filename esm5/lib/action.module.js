/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminImageDirective } from './admin-image/admin-image.directive';
import { GndDirective } from './directives/gnd.directive';
import { JdnDatepickerDirective } from './directives/jdn-datepicker.directive';
import { ExistingNameDirective } from './existing-name/existing-name.directive';
import { KeyPipe } from './pipes/key.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { ResourceDialogComponent } from './resource-dialog/resource-dialog.component';
import { SortButtonComponent } from './sort-button/sort-button.component';
var KuiActionModule = /** @class */ (function () {
    function KuiActionModule() {
    }
    KuiActionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        BrowserAnimationsModule,
                        MatButtonModule,
                        MatIconModule,
                        MatMenuModule
                    ],
                    declarations: [
                        ProgressIndicatorComponent,
                        SortButtonComponent,
                        SortByPipe,
                        AdminImageDirective,
                        ExistingNameDirective,
                        ReversePipe,
                        KeyPipe,
                        GndDirective,
                        ResourceDialogComponent,
                        JdnDatepickerDirective
                    ],
                    exports: [
                        ProgressIndicatorComponent,
                        SortButtonComponent,
                        ResourceDialogComponent,
                        SortByPipe,
                        AdminImageDirective,
                        ExistingNameDirective,
                        ReversePipe,
                        KeyPipe,
                        GndDirective,
                        JdnDatepickerDirective
                    ]
                },] },
    ];
    return KuiActionModule;
}());
export { KuiActionModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9hY3Rpb24vIiwic291cmNlcyI6WyJsaWIvYWN0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7OztnQkFFekUsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLHVCQUF1Qjt3QkFDdkIsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGFBQWE7cUJBRWhCO29CQUNELFlBQVksRUFBRTt3QkFDViwwQkFBMEI7d0JBQzFCLG1CQUFtQjt3QkFDbkIsVUFBVTt3QkFDVixtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsV0FBVzt3QkFDWCxPQUFPO3dCQUNQLFlBQVk7d0JBQ1osdUJBQXVCO3dCQUN2QixzQkFBc0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDTCwwQkFBMEI7d0JBQzFCLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2QixVQUFVO3dCQUNWLG1CQUFtQjt3QkFDbkIscUJBQXFCO3dCQUNyQixXQUFXO3dCQUNYLE9BQU87d0JBQ1AsWUFBWTt3QkFDWixzQkFBc0I7cUJBQ3pCO2lCQUNKOzswQkFqREQ7O1NBa0RhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IEFkbWluSW1hZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2FkbWluLWltYWdlL2FkbWluLWltYWdlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBHbmREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZ25kLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBKZG5EYXRlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2pkbi1kYXRlcGlja2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBFeGlzdGluZ05hbWVEaXJlY3RpdmUgfSBmcm9tICcuL2V4aXN0aW5nLW5hbWUvZXhpc3RpbmctbmFtZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgS2V5UGlwZSB9IGZyb20gJy4vcGlwZXMva2V5LnBpcGUnO1xuaW1wb3J0IHsgUmV2ZXJzZVBpcGUgfSBmcm9tICcuL3BpcGVzL3JldmVyc2UucGlwZSc7XG5pbXBvcnQgeyBTb3J0QnlQaXBlIH0gZnJvbSAnLi9waXBlcy9zb3J0LWJ5LnBpcGUnO1xuXG5pbXBvcnQgeyBQcm9ncmVzc0luZGljYXRvckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MtaW5kaWNhdG9yL3Byb2dyZXNzLWluZGljYXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzb3VyY2VEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlLWRpYWxvZy9yZXNvdXJjZS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFNvcnRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3NvcnQtYnV0dG9uL3NvcnQtYnV0dG9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXG4gICAgICAgIE1hdE1lbnVNb2R1bGVcblxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFByb2dyZXNzSW5kaWNhdG9yQ29tcG9uZW50LFxuICAgICAgICBTb3J0QnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBTb3J0QnlQaXBlLFxuICAgICAgICBBZG1pbkltYWdlRGlyZWN0aXZlLFxuICAgICAgICBFeGlzdGluZ05hbWVEaXJlY3RpdmUsXG4gICAgICAgIFJldmVyc2VQaXBlLFxuICAgICAgICBLZXlQaXBlLFxuICAgICAgICBHbmREaXJlY3RpdmUsXG4gICAgICAgIFJlc291cmNlRGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBKZG5EYXRlcGlja2VyRGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFByb2dyZXNzSW5kaWNhdG9yQ29tcG9uZW50LFxuICAgICAgICBTb3J0QnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBSZXNvdXJjZURpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgU29ydEJ5UGlwZSxcbiAgICAgICAgQWRtaW5JbWFnZURpcmVjdGl2ZSxcbiAgICAgICAgRXhpc3RpbmdOYW1lRGlyZWN0aXZlLFxuICAgICAgICBSZXZlcnNlUGlwZSxcbiAgICAgICAgS2V5UGlwZSxcbiAgICAgICAgR25kRGlyZWN0aXZlLFxuICAgICAgICBKZG5EYXRlcGlja2VyRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBLdWlBY3Rpb25Nb2R1bGUge1xufVxuIl19
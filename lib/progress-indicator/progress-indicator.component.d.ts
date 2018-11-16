import { OnInit } from '@angular/core';
export declare class ProgressIndicatorComponent implements OnInit {
    /**
     * status is a number
     * - not ready:    -1
     * - loading:       0
     * - done:          1
     *
     * - error:       400
     */
    status?: number;
    color?: string;
    constructor();
    ngOnInit(): void;
}

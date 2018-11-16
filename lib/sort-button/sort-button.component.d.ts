import { EventEmitter, OnInit } from '@angular/core';
export declare class SortButtonComponent implements OnInit {
    sortKeyChange: EventEmitter<string>;
    menuXPos: string;
    activeKey: string;
    sortProps: any;
    position: string;
    sortKey(value: any): void;
    constructor();
    ngOnInit(): void;
    sortBy(key: string): void;
}

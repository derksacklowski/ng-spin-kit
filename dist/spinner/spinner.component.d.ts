import { OnDestroy } from '@angular/core';
export declare class SpinnerComponent implements OnDestroy {
    visible: boolean;
    timeout: any;
    baseClass: string;
    childClass: string;
    numItems: number;
    delay: number;
    color: string;
    isRunning: boolean;
    private cancel();
    readonly items: any[];
    ngOnDestroy(): any;
}
export declare const SpinnerTemplate: string;

import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[highlight]'
})
export class Highlight{
    constructor(er:ElementRef){
        er.nativeElement.style.backgroundColor="yellow"
    }
}
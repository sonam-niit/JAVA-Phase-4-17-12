import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector:'[colorchange]'
})
export class ColorChange{
    constructor(er:ElementRef,render:Renderer2){
        render.setStyle(er.nativeElement,"color","green")
    }
}
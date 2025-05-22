import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";



@Directive({
    selector:'[styleCss]',
    standalone:true
})

export class StyleDirective{
    constructor(private _ele:ElementRef, private _renderer:Renderer2){

    }
    @HostListener('click') OnKeyDown(){
this._renderer.setStyle(this._ele.nativeElement, 'backgroundColor', 'yellow')
this._renderer.setStyle(this._ele.nativeElement, 'fontSize', '25px')

    }

    @HostListener('mouseleave') OnKeyUp(){
        this._renderer.removeStyle(this._ele.nativeElement,'backgroundColor')
    }

}
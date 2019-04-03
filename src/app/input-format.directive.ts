import { Directive,HostListener, ElementRef, Input, } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  //@Input('format') format;
  @Input('appInputFormat') format;
  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus(){
    console.log("On Focus")
  }

  @HostListener('blur') onBlur(){
    console.log("On Blur")
    let value: string = this.el.nativeElement.value;
    if (this.format == 'lowercase'){
      this.el.nativeElement.value = value.toLocaleLowerCase();
    }
    else{
      this.el.nativeElement.value = value.toLocaleUpperCase();
    }
    
  }



}

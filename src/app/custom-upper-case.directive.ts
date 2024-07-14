import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomUpperCase]',
  standalone: true
})
export class CustomUpperCaseDirective implements OnInit{

  constructor(private el: ElementRef) { }

  ngOnInit(){
    debugger;
    let el = this.el.nativeElement;
    el.setAttribute('style', 'text-transform: capitalize; font-weight: bold');
    //  this.el.nativeElement.style.color = "red"
  }

}
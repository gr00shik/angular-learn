import {Directive, ElementRef, OnInit} from "@angular/core"

@Directive({
  selector: '[backGround]'
})
export class BackgroundDirective implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    this.element.nativeElement.style.background = "green"
  }

}

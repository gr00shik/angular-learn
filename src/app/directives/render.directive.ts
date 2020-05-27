import {Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input} from "@angular/core"

@Directive({
  selector: '[render]'
})
export class RenderDirective implements OnInit {

  @Input("testParam") testParam : string;
  @HostBinding("style.padding") padding: string;

  constructor(private element: ElementRef, private render: Renderer2) {
  }

  ngOnInit(): void {
    this.render.setStyle(this.element.nativeElement, "font-size", "25px");
  }

  @HostListener("mouseenter", ["$event"]) mouseEnter(event: Event) {
    this.render.setStyle(this.element.nativeElement, "font-size", "26px");
    this.padding = "10px"
  }

  @HostListener("mouseleave", ["$event"]) mouseLeave(event: Event) {
    this.render.setStyle(this.element.nativeElement, "font-size", "25px");
    this.padding = "0px"
  }

}

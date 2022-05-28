import { Directive, HostListener, HostBinding } from '@angular/core';
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostBinding ('class.appColor') color;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.color = {'background-color': "red"}
    setInterval
  }

  // @HostListener("click") changeColor () {
  //   this.color = {'background-color': "red"}
  // }
}

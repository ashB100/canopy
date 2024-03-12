import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[lgRow]',
  standalone: true,
})
export class LgGridRowDirective {
  @HostBinding('class.lg-row') class = true;
}

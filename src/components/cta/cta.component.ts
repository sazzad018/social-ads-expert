import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaComponent {
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

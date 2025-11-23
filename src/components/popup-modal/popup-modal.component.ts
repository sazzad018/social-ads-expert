import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  standalone: true,
})
export class PopupModalComponent {
  isOpen = signal(false);
  private readonly sessionKey = 'popupShown';

  open(): void {
    if (sessionStorage.getItem(this.sessionKey)) {
      return;
    }
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
    sessionStorage.setItem(this.sessionKey, 'true');
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.close();
  }
}

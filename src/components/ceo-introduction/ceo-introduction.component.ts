import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ceo-introduction',
  templateUrl: './ceo-introduction.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class CeoIntroductionComponent {
  stats = [
    { value: '৮+', label: 'বছরের অভিজ্ঞতা' },
    { value: '৫ কোটি+', label: 'বার্ষিক মার্কেটিং বাজেট' },
    { value: '১৫০০+', label: 'সফল ক্লায়েন্ট' },
  ];

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

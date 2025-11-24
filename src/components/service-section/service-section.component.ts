

import { Component, ChangeDetectionStrategy, input, inject, computed, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-service-section',
  standalone: true,
  templateUrl: './service-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class ServiceSectionComponent {
  id = input.required<string>();
  title = input.required<string>();
  subtitle = input.required<string>();
  points = input.required<string[]>();
  iconType = input<'facebook' | 'website' | 'business'>();
  videoUrl = input.required<string>();
  videoSide = input<'left' | 'right'>('left');
  showPricingButton = input<boolean>(false);
  theme = input<'cyan' | 'violet'>('cyan');

  // New inputs for layout variations
  layoutType = input<'default' | 'facebook'>('default');
  tabs = input<string[]>();
  specialNote = input<string>();
  videoCaption = input<string>();

  scrollToPricing = output<void>();

  private sanitizer = inject(DomSanitizer);

  safeVideoUrl = computed(() => 
    this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl())
  );

  onSeePricingClick(): void {
    this.scrollToPricing.emit();
  }
}
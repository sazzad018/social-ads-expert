
import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  recommended: boolean;
  demoUrl?: string;
}

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class PricingCardComponent {
  plan = input.required<PricingPlan>();
}

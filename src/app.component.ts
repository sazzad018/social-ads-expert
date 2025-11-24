

import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';
import { PricingSectionComponent } from './components/pricing-section/pricing-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { CtaComponent } from './components/cta/cta.component';
import { ProcessComponent } from './components/process/process.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { FaqComponent } from './components/faq/faq.component';
import { ReadyBusinessSectionComponent } from './components/ready-business-section/ready-business-section.component';
import { ClientsComponent } from './components/clients/clients.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { StatsComponent } from './components/stats/stats.component';
import { PopupModalComponent } from './components/popup-modal/popup-modal.component';
import { IncomePlannerModalComponent } from './components/income-planner-modal/income-planner-modal.component';
import { CeoIntroductionComponent } from './components/ceo-introduction/ceo-introduction.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    ClientsComponent,
    WhyChooseUsComponent,
    StatsComponent,
    ProcessComponent,
    ServiceSectionComponent,
    CaseStudiesComponent,
    TestimonialsComponent,
    PricingSectionComponent,
    CeoIntroductionComponent,
    FaqComponent,
    CtaComponent,
    FooterComponent,
    ReadyBusinessSectionComponent,
    PopupModalComponent,
    IncomePlannerModalComponent
  ],
})
export class AppComponent implements AfterViewInit {
  title = 'marketing-agency';

  @ViewChild(PopupModalComponent) popupModal!: PopupModalComponent;
  @ViewChild(IncomePlannerModalComponent) incomePlannerModal!: IncomePlannerModalComponent;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.popupModal.open();
    }, 1000); // 1 second delay

    setTimeout(() => {
      this.incomePlannerModal.open();
    }, 20000); // 20 second delay
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
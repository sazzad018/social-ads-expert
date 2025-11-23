import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-income-planner-modal',
  templateUrl: './income-planner-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class IncomePlannerModalComponent {
  isOpen = signal(false);
  submissionStatus = signal<'idle' | 'submitting' | 'success' | 'error'>('idle');
  private readonly sessionKey = 'incomePlannerPopupShown';
  private readonly ownerWhatsappNumber = '8801798205143';

  plannerForm = new FormGroup({
    plan: new FormControl('', [Validators.required, Validators.minLength(10)]),
    whatsappNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
  });

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

  onSubmit() {
    if (this.plannerForm.valid) {
      this.submissionStatus.set('submitting');
      this.plannerForm.disable();
      
      const { plan, whatsappNumber } = this.plannerForm.getRawValue();

      const message = `নমস্কার সোশ্যাল অ্যাডস এক্সপার্ট,\n\nআমি ইনকাম প্ল্যান নিয়ে আলোচনা করতে চাই।\n\nআমার প্ল্যান: ${plan}\nআমার হোয়াটসঅ্যাপ নাম্বার: ${whatsappNumber}\n\nধন্যবাদ।`;
      
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${this.ownerWhatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
      
      this.submissionStatus.set('success');
      this.plannerForm.reset();
      
      setTimeout(() => {
        this.close();
        // Reset to idle in case the user opens it again somehow without refresh
        this.submissionStatus.set('idle'); 
      }, 3000); // Close modal after 3 seconds
    } else {
      this.plannerForm.markAllAsTouched();
    }
  }

  isInvalid(controlName: 'plan' | 'whatsappNumber'): boolean {
    const control = this.plannerForm.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }
}

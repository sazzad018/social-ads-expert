import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule]
})
export class HeroComponent {
  submissionStatus = signal<'idle' | 'submitting' | 'success' | 'error'>('idle');

  clientAvatars = [
    'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    'https://i.pravatar.cc/150?u=a042581f4e29026705d',
    'https://i.pravatar.cc/150?u=a042581f4e29026706d',
    'https://i.pravatar.cc/150?u=a042581f4e29026707d',
  ];

  private readonly whatsappNumber = '8801798205143';

  leadForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
    fbPageLink: new FormControl('', [Validators.required, Validators.pattern('^https?://(www\\.)?facebook\\.com/.*')]),
  });

  onSubmit() {
    if (this.leadForm.valid) {
      this.submissionStatus.set('submitting');
      this.leadForm.disable(); // Disable form to prevent multiple submissions
      
      // Use getRawValue() to access values from a disabled form
      const { name, phone, fbPageLink } = this.leadForm.getRawValue();

      const message = `নমস্কার সোশ্যাল অ্যাডস এক্সপার্ট,\n\nআমি বিনামূল্যে পরামর্শের জন্য আবেদন করছি।\n\nনাম: ${name}\nমোবাইল নাম্বার: ${phone}\nফেসবুক পেজ লিংক: ${fbPageLink}\n\nধন্যবাদ।`;
      
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
      
      this.submissionStatus.set('success');
      this.leadForm.reset(); // Resets the form and re-enables it
       // Reset to idle after a few seconds to allow another submission
      setTimeout(() => this.submissionStatus.set('idle'), 5000);
    } else {
      console.error('Form is invalid');
      this.leadForm.markAllAsTouched();
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.leadForm.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }
}

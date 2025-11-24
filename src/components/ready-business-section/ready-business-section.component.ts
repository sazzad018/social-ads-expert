
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ready-business-section',
  standalone: true,
  templateUrl: './ready-business-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class ReadyBusinessSectionComponent {
  private sanitizer = inject(DomSanitizer);
  
  private readonly videoUrl = 'https://www.youtube.com/embed/i3z5c1t7O-c';
  readonly safeVideoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  
  steps = [
    {
      title: 'প্রোডাক্ট ও মার্কেট রিসার্চ',
      description: 'আপনার বাজেট ও মার্কেটের চাহিদা বিশ্লেষণ করে লাভজনক প্রোডাক্ট খুঁজে বের করা।'
    },
    {
      title: 'ফেসবুক পেজ ব্র্যান্ডিং ও সেটআপ',
      description: 'আকর্ষনীয় নাম, লোগো এবং কভার ফটো দিয়ে প্রফেশনাল পেজ তৈরি করা।'
    },
    {
      title: 'ওয়েবসাইট / ল্যান্ডিং পেজ তৈরি',
      description: 'সেলস এবং কাস্টমার ডেটা সংগ্রহের জন্য একটি কনভার্সন-ফোকাসড পেজ তৈরি।'
    },
    {
      title: 'অফার ও মার্কেটিং প্ল্যান',
      description: 'প্রোডাক্টের জন্য সঠিক অফার (ডিসকাউন্ট, প্যাকেজ, প্রাইসিং) এবং মার্কেটিং প্ল্যান তৈরি করা।'
    },
    {
      title: 'হাতে-কলমে মার্কেটিং ও প্রথম সেলস',
      description: 'আপনাকে সাথে নিয়ে প্রথম মার্কেটিং ক্যাম্পেইন চালানো এবং প্রথম সেলস জেনারেট করা, যাতে আপনি পুরো প্রক্রিয়াটি শিখতে পারেন।'
    }
  ];
}
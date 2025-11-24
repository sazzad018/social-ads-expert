
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class TestimonialsComponent {
  testimonials = [
    {
      quote: "সোশ্যাল অ্যাডস এক্সপার্ট আমাদের ফেসবুক বিজ্ঞাপনের খরচ অর্ধেকে নামিয়ে এনেছে এবং বিক্রয় দ্বিগুণ করেছে। তাদের ডেটা-ভিত্তিক অ্যাপ্রোচ সত্যিই অসাধারণ। আমি তাদের সার্ভিস wholeheartedly recommend করছি।",
      name: 'আরিফুল ইসলাম',
      title: 'সিইও, Fashion Corner BD',
      avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
    },
    {
      quote: "আমাদের পুরোনো ওয়েবসাইটটি খুবই স্লো ছিল। তারা মাত্র ৩ সপ্তাহের মধ্যে একটি আধুনিক এবং দ্রুতগতির ই-কমার্স সাইট তৈরি করে দিয়েছে। আমাদের মোবাইল থেকে অর্ডার ৮০% বৃদ্ধি পেয়েছে। ধন্যবাদ!",
      name: 'সুমাইয়া আক্তার',
      title: 'প্রতিষ্ঠাতা, Gadget Hub',
      avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d'
    },
    {
      quote: "ব্যবসা সম্পর্কে কোনো ধারণা ছাড়াই আমি তাদের 'রেডি বিজনেস' প্যাকেজটি নিই। প্রথম মাসেই আমার বিনিয়োগ উঠে আসে এবং আমি লাভ করতে শুরু করি। তারা শুধু সার্ভিসই দেয় না, একজন মেন্টরের মতো পাশে থাকে।",
      name: 'জাকির হোসেন',
      title: 'উদ্যোক্তা, Ready Kitchen',
      avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706d'
    }
  ];
}
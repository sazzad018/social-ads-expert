
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class WhyChooseUsComponent {
  features = [
    {
      title: 'ফলাফল-ভিত্তিক স্ট্র্যাটেজি',
      description: 'আমরা শুধু বিজ্ঞাপন চালাই না, আমরা এমন কৌশল তৈরি করি যা আপনার ব্যবসাকে সত্যিকার অর্থে লাভবান করে এবং বিক্রয় বৃদ্ধি নিশ্চিত করে।',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28L19.5 12" /></svg>`
    },
    {
      title: 'অভিজ্ঞ ও নিবেদিত টিম',
      label: 'ওয়েবসাইট তৈরি করেছি',
      description: 'আমাদের টিমের প্রত্যেক সদস্য তাদের নিজ নিজ ক্ষেত্রে বিশেষজ্ঞ। আমরা আপনার ব্যবসাকে নিজের মনে করে কাজ করি এবং সেরা ফলাফল দিতে প্রতিশ্রুতিবদ্ধ।',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-4.663M12 12.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Z" /></svg>`
    },
    {
      title: 'ডেটা-নির্ভর সিদ্ধান্ত',
      description: 'অনুমানের উপর ভিত্তি করে নয়, আমরা প্রতিটি সিদ্ধান্ত নিই সঠিক ডেটা এবং অ্যানালিটিক্স বিশ্লেষণ করে। এতে আপনার বিজ্ঞাপনের প্রতিটি টাকা সঠিকভাবে ব্যবহৃত হয়।',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M9 20.25h6M16.5 20.25h.008v.008h-.008v-.008Zm-3.75 0h.008v.008h-.008v-.008Zm-3.75 0h.008v.008h-.008v-.008Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.5a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6Z" /></svg>`
    }
  ];
}
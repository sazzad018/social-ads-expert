

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  standalone: true,
  templateUrl: './process.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class ProcessComponent {
  steps = [
    {
      step: 1,
      title: 'আলোচনা ও পরিকল্পনা',
      description: 'প্রথমে আমরা আপনার ব্যবসার লক্ষ্য, টার্গেট অডিয়েন্স এবং বাজেট নিয়ে বিস্তারিত আলোচনা করি। এরপর একটি কার্যকর স্ট্র্যাটেজি তৈরি করি।',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-orange-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.311a12.06 12.06 0 0 0-4.5 0m-3.75 2.311a12.06 12.06 0 0 1-4.5 0m9 0a12.06 12.06 0 0 0-4.5 0M9 12a6 6 0 1 1 12 0v5.25m0 0a6 6 0 1 1-12 0v-5.25" /></svg>`
    },
    {
      step: 2,
      title: 'ক্যাম্পেইন التنفيذ',
      description: 'আমাদের বিশেষজ্ঞ টিম আপনার জন্য আকর্ষণীয় অ্যাড কপি, ভিজ্যুয়াল এবং ল্যান্ডিং পেজ তৈরি করে। এরপর নির্ধারিত প্ল্যাটফর্মে ক্যাম্পেইন চালু করা হয়।',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-orange-500"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>`
    },
    {
      step: 3,
      title: 'পর্যবেক্ষণ ও অপটিমাইজেশন',
      description: 'ক্যাম্পেইন চলাকালীন আমরা সার্বক্ষণিক ডেটা অ্যানালাইসিস করি। সেরা পারফরম্যান্স নিশ্চিত করার জন্য বিজ্ঞাপনগুলোকে রিয়েল-টাইমে অপটিমাইজ করা হয়।',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-orange-500"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12A2.25 2.25 0 0 0 20.25 14.25V3M3.75 3h16.5M3.75 3v1.5M10.5 3v1.5M15 3v1.5M3.75 16.5v3.375c0 .621.504 1.125 1.125 1.125h13.5c.621 0 1.125-.504 1.125-1.125V16.5" /></svg>`
    },
    {
      step: 4,
      title: 'রিপোর্টিং ও স্কেলিং',
      description: 'প্রতিটি ক্যাম্পেইন শেষে আমরা আপনাকে একটি বিস্তারিত রিপোর্ট প্রদান করি। সফলতার উপর ভিত্তি করে আপনার ব্যবসাকে আরও বড় করার জন্য পরবর্তী পরিকল্পনা করা হয়।',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-orange-500"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>`
    }
  ];
}
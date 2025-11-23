
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class CaseStudiesComponent {
  caseStudies = [
    {
      client: "Fashion Corner BD",
      logo: "https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg",
      challenge: "ফেসবুক বিজ্ঞাপনে উচ্চ খরচ সত্ত্বেও বিক্রয় কম হচ্ছিল এবং সঠিক গ্রাহকের কাছে পৌঁছানো যাচ্ছিল না।",
      solution: "আমরা তাদের টার্গেট অডিয়েন্স পুনরায় বিশ্লেষণ করি এবং ডেটা-ভিত্তিক A/B টেস্টিং এর মাধ্যমে একটি নতুন ক্যাম্পেইন স্ট্র্যাটেজি তৈরি করি।",
      results: [
        { metric: "3x", label: "বিক্রয় বৃদ্ধি" },
        { metric: "45%", label: "বিজ্ঞাপন খরচ হ্রাস" },
        { metric: "2.5x", label: "Return on Ad Spend (ROAS)" }
      ]
    },
    {
      client: "Gadget Hub",
      logo: "https://tailwindui.com/img/logos/158x48/reform-logo-white.svg",
      challenge: "তাদের পুরানো ওয়েবসাইটের কারণে গ্রাহকরা মোবাইল থেকে অর্ডার করতে পারছিলেন না এবং লোডিং স্পিড খুব কম ছিল।",
      solution: "আমরা একটি সম্পূর্ণ নতুন, মোবাইল-ফ্রেন্ডলি এবং দ্রুতগতির ই-কমার্স ওয়েবসাইট তৈরি করি, সাথে যুক্ত করি সহজ পেমেন্ট সিস্টেম।",
      results: [
        { metric: "80%", label: "মোবাইল থেকে অর্ডার বৃদ্ধি" },
        { metric: "60%", label: "সাইট লোডিং স্পিড উন্নতি" },
        { metric: "40%", label: "রূপান্তর হার বৃদ্ধি" }
      ]
    },
    {
      client: "Ready Kitchen",
      logo: "https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg",
      challenge: "কোনো পূর্ব অভিজ্ঞতা ছাড়াই একটি অনলাইন ফুড বিজনেস শুরু করতে চেয়েছিলেন এবং একটি লাভজনক মডেল খুঁজছিলেন।",
      solution: "আমরা 'রেডি বিজনেস' মডেলের অধীনে তাদের জন্য একটি সম্পূর্ণ ব্র্যান্ড, ওয়েবসাইট এবং মার্কেটিং প্ল্যান তৈরি করে দিই।",
      results: [
        { metric: "১ম মাসে", label: "ব্রেক-ইভেন পয়েন্টে পৌঁছানো" },
        { metric: "৩০০+", label: "প্রথম মাসে অর্ডার" },
        { metric: "৫০,০০০+", label: "প্রথম মাসে বিক্রয়" }
      ]
    }
  ];
}

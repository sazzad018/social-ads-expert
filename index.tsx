
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
// FIX: Removed unused `ApplicationRef` from this import.
import { provideZonelessChangeDetection } from '@angular/core';
import { AppComponent } from './src/app.component';
// FIX: The import for 'provideForms' and 'withNgZone' was removed as these functions are not exported from '@angular/forms'.
// Reactive forms support is already correctly provided below.
import { ReactiveFormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    importProvidersFrom(ReactiveFormsModule)
  ],
}).catch((err) => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
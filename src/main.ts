import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { DestinationsComponent } from './components/destinations.component';
import { ActivitiesComponent } from './components/activities.component';
import { GalleryComponent } from './components/gallery.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    DestinationsComponent,
    ActivitiesComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="app">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-destinations></app-destinations>
        <app-activities></app-activities>
        <app-gallery></app-gallery>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app {
      min-height: 100vh;
   
    border:2px solid green;
    }
    
    main {
      padding-top: 0;
    }
    
    * {
      scroll-behavior: smooth;
    }
  `]
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter([])
  ]
});
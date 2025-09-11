import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="gallery" class="section gallery">
      <div class="container">
        <h2 class="section-title">Mountain Gallery</h2>
        <h2 class="section-title">Kashmir & Ladakh Gallery</h2>
        <p class="section-subtitle">
          Immerse yourself in the breathtaking beauty of Kashmir and Ladakh 
          through this curated collection of stunning photographs from paradise on earth.
        </p>
        
        <div class="gallery-grid">
          <div 
            *ngFor="let image of images(); let i = index" 
            class="gallery-item"
            [style.animation-delay]="(i * 0.1) + 's'"
            (click)="openLightbox(image)"
          >
            <img [src]="image.src" [alt]="image.title">
            <div class="gallery-overlay">
              <div class="gallery-content">
                <h4>{{ image.title }}</h4>
                <span class="category">{{ image.category }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="gallery-stats">
          <div class="stat-item">
            <h3>50+</h3>
            <p>Destinations</p>
          </div>
          <div class="stat-item">
            <h3>10K+</h3>
            <p>Happy Travelers</p>
          </div>
          <div class="stat-item">
            <h3>500+</h3>
            <p>Adventures</p>
          </div>
          <div class="stat-item">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
      
      <!-- Lightbox Modal -->
      <div class="lightbox" [class.active]="selectedImage()" (click)="closeLightbox()">
        <div class="lightbox-content" (click)="$event.stopPropagation()">
          <button class="lightbox-close" (click)="closeLightbox()">✕</button>
          <img [src]="selectedImage()?.src" [alt]="selectedImage()?.title">
          <div class="lightbox-info">
            <h3>{{ selectedImage()?.title }}</h3>
            <span>{{ selectedImage()?.category }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .gallery {
      background: linear-gradient(135deg, #1e3a8a 0%, #065f46 100%);
      color: white;
    }
    
    .section-title, .section-subtitle {
      color: white;
    }
    
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-bottom: 4rem;
    }
    
    .gallery-item {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      opacity: 0;
      animation: fadeInUp 0.8s ease-out forwards;
      transition: transform 0.3s ease;
    }
    
    .gallery-item:hover {
      transform: scale(1.05);
    }
    
    .gallery-item img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .gallery-item:hover img {
      transform: scale(1.1);
    }
    
    .gallery-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
      display: flex;
      align-items: flex-end;
      padding: 1.5rem;
    }
    
    .gallery-item:hover .gallery-overlay {
      opacity: 1;
    }
    
    .gallery-content h4 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    
    .category {
      background: rgba(234, 88, 12, 0.8);
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
    }
    
    .gallery-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      text-align: center;
    }
    
    .stat-item h3 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #ea580c;
      margin-bottom: 0.5rem;
    }
    
    .stat-item p {
      font-size: 1.1rem;
      opacity: 0.9;
    }
    
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.9);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }
    
    .lightbox.active {
      opacity: 1;
      visibility: visible;
    }
    
    .lightbox-content {
      position: relative;
      max-width: 90vw;
      max-height: 90vh;
      background: white;
      border-radius: 12px;
      overflow: hidden;
    }
    
    .lightbox-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      cursor: pointer;
      font-size: 1.2rem;
      z-index: 1;
      transition: background 0.3s ease;
    }
    
    .lightbox-close:hover {
      background: #ea580c;
    }
    
    .lightbox-content img {
      width: 100%;
      height: auto;
      max-height: 80vh;
      object-fit: contain;
    }
    
    .lightbox-info {
      padding: 1.5rem;
      background: white;
      color: #333;
    }
    
    .lightbox-info h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #1e3a8a;
    }
    
    .lightbox-info span {
      color: #6b7280;
    }
    
    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: 1fr;
      }
      
      .gallery-stats {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .stat-item h3 {
        font-size: 2rem;
      }
    }
  `]
})
export class GalleryComponent {
  selectedImage = signal<GalleryImage | null>(null);

  images = signal<GalleryImage[]>([
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Dal Lake Serenity',
      category: 'Kashmir Lakes'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ladakh Landscapes',
      category: 'Ladakh Desert'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Gulmarg Meadows',
      category: 'Kashmir Valleys'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Pahalgam Rivers',
      category: 'Kashmir Streams'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sonamarg Glaciers',
      category: 'Kashmir Glaciers'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1559821/pexels-photo-1559821.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Leh Monastery',
      category: 'Ladakh Culture'
    }
  ]);

  openLightbox(image: GalleryImage) {
    this.selectedImage.set(image);
  }

  closeLightbox() {
    this.selectedImage.set(null);
  }
}
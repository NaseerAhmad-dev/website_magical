import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
  altitude: string;
  temperature: string;
  bestTime: string;
  featured?: boolean;
}

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="destinations" class="section destinations">
      <div class="container">
        <h2 class="section-title">Mountain Destinations</h2>
        <h2 class="section-title">Kashmir & Ladakh Destinations</h2>
        <p class="section-subtitle">
          Discover the most beautiful destinations in Kashmir and Ladakh, from serene 
          valleys and pristine lakes to ancient monasteries and snow-capped peaks.
        </p>
        
        <div class="destinations-grid">
          <div 
            *ngFor="let destination of destinations()" 
            class="destination-card"
            [class.featured]="destination.featured"
            (mouseenter)="setHoveredCard(destination.id)"
            (mouseleave)="setHoveredCard(null)"
          >
            <div class="card-image">
              <img [src]="destination.image" [alt]="destination.name">
              <div class="card-overlay"></div>
              <div class="card-badge" *ngIf="destination.featured">Featured</div>
            </div>
            
            <div class="card-content">
              <div class="card-header">
                <h3>{{ destination.name }}</h3>
                <span class="location">📍 {{ destination.location }}</span>
              </div>
              
              <p class="description">{{ destination.description }}</p>
              
              <div class="destination-info">
                <div class="info-item">
                  <span class="label">Altitude</span>
                  <span class="value">{{ destination.altitude }}</span>
                </div>
                <div class="info-item">
                  <span class="label">Temperature</span>
                  <span class="value">{{ destination.temperature }}</span>
                </div>
                <div class="info-item">
                  <span class="label">Best Time</span>
                  <span class="value">{{ destination.bestTime }}</span>
                </div>
              </div>
              
              <button class="btn btn-primary card-btn">Explore More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .destinations {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    }
    
    .destinations-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }
    
    .destination-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: all 0.4s ease;
      position: relative;
    }
    
    .destination-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    
    .destination-card.featured {
      transform: scale(1.05);
      border: 2px solid #ea580c;
    }
    
    .destination-card.featured:hover {
      transform: scale(1.05) translateY(-8px);
    }
    
    .card-image {
      position: relative;
      height: 250px;
      overflow: hidden;
    }
    
    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    
    .destination-card:hover .card-image img {
      transform: scale(1.1);
    }
    
    .card-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3));
    }
    
    .card-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #ea580c;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }
    
    .card-content {
      padding: 1.5rem;
    }
    
    .card-header {
      margin-bottom: 1rem;
    }
    
    .card-header h3 {
      font-size: 1.4rem;
      font-weight: 700;
      color: #1e3a8a;
      margin-bottom: 0.5rem;
    }
    
    .location {
      color: #6b7280;
      font-size: 0.9rem;
    }
    
    .description {
      color: #4b5563;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .destination-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    
    .info-item {
      display: flex;
      flex-direction: column;
    }
    
    .label {
      font-size: 0.8rem;
      color: #6b7280;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
    
    .value {
      font-weight: 600;
      color: #1e3a8a;
      margin-top: 0.25rem;
    }
    
    .card-btn {
      width: 100%;
      justify-content: center;
    }
    
    @media (max-width: 768px) {
      .destinations-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      
      .destination-card.featured {
        transform: none;
      }
      
      .destination-card.featured:hover {
        transform: translateY(-8px);
      }
    }
  `]
})
export class DestinationsComponent {
  hoveredCard = signal<number | null>(null);

  destinations = signal<Destination[]>([
    {
      id: 1,
      name: 'Srinagar & Dal Lake',
      location: 'Kashmir Valley',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Experience the Venice of the East with houseboats, Shikara rides, and Mughal gardens.',
      altitude: '1,585m',
      temperature: '2°C - 30°C',
      bestTime: 'Mar - Oct',
      featured: true
    },
    {
      id: 2,
      name: 'Leh Ladakh',
      location: 'Ladakh',
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The land of high passes with ancient monasteries, pristine lakes, and dramatic landscapes.',
      altitude: '3,500m - 5,600m',
      temperature: '-20°C - 25°C',
      bestTime: 'May - Sep'
    },
    {
      id: 3,
      name: 'Gulmarg',
      location: 'Kashmir',
      image: 'https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The meadow of flowers offering world-class skiing and the famous Gondola ride.',
      altitude: '2,650m',
      temperature: '-10°C - 20°C',
      bestTime: 'Dec - Mar, Jun - Sep'
    },
    {
      id: 4,
      name: 'Pahalgam',
      location: 'Kashmir',
      image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Valley of shepherds with pristine rivers, pine forests, and base for Amarnath Yatra.',
      altitude: '2,130m',
      temperature: '0°C - 25°C',
      bestTime: 'Apr - Oct'
    }
  ]);

  setHoveredCard(id: number | null) {
    this.hoveredCard.set(id);
  }
}
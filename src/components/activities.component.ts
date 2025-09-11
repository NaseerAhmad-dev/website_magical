import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Activity {
  id: number;
  name: string;
  icon: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  price: string;
}

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="activities" class="section activities">
      <div class="container">
        <h2 class="section-title">Adventure Activities</h2>
        <h2 class="section-title">Kashmir & Ladakh Experiences</h2>
        <p class="section-subtitle">
          From serene Shikara rides in Dal Lake to thrilling mountain biking in Ladakh, 
          discover unique experiences that showcase the beauty of these regions.
        </p>
        
        <div class="activity-tabs">
          <button 
            *ngFor="let category of categories()" 
            class="tab-btn"
            [class.active]="selectedCategory() === category"
            (click)="selectCategory(category)"
          >
            {{ category }}
          </button>
        </div>
        
        <div class="activities-grid">
          <div 
            *ngFor="let activity of filteredActivities()" 
            class="activity-card"
            (mouseenter)="setHoveredActivity(activity.id)"
            (mouseleave)="setHoveredActivity(null)"
          >
            <div class="activity-icon">{{ activity.icon }}</div>
            
            <div class="activity-content">
              <h3>{{ activity.name }}</h3>
              <p>{{ activity.description }}</p>
              
              <div class="activity-meta">
                <span class="difficulty" [class]="'difficulty-' + activity.difficulty.toLowerCase()">
                  {{ activity.difficulty }}
                </span>
                <span class="duration">⏱️ {{ activity.duration }}</span>
              </div>
              
              <div class="activity-footer">
                <span class="price">{{ activity.price }}</span>
                <button class="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .activities {
      background: white;
    }
    
    .activity-tabs {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }
    
    .tab-btn {
      padding: 0.8rem 1.5rem;
      border: 2px solid #e5e7eb;
      background: white;
      border-radius: 25px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;
      color: #6b7280;
    }
    
    .tab-btn:hover, .tab-btn.active {
      border-color: #ea580c;
      background: #ea580c;
      color: white;
    }
    
    .activities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }
    
    .activity-card {
      background: linear-gradient(135deg, #ffffff, #f8fafc);
      border-radius: 16px;
      padding: 2rem;
      border: 1px solid #e5e7eb;
      transition: all 0.4s ease;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .activity-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
      border-color: #ea580c;
    }
    
    .activity-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(234, 88, 12, 0.1), transparent);
      transition: left 0.5s ease;
    }
    
    .activity-card:hover::before {
      left: 100%;
    }
    
    .activity-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      position: relative;
      z-index: 1;
    }
    
    .activity-content {
      position: relative;
      z-index: 1;
    }
    
    .activity-content h3 {
      font-size: 1.4rem;
      font-weight: 700;
      color: #1e3a8a;
      margin-bottom: 1rem;
    }
    
    .activity-content p {
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .activity-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .difficulty {
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .difficulty-easy {
      background: #d1fae5;
      color: #065f46;
    }
    
    .difficulty-medium {
      background: #fef3c7;
      color: #92400e;
    }
    
    .difficulty-hard {
      background: #fee2e2;
      color: #991b1b;
    }
    
    .duration {
      color: #6b7280;
      font-size: 0.9rem;
    }
    
    .activity-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .price {
      font-size: 1.2rem;
      font-weight: 700;
      color: #ea580c;
    }
    
    @media (max-width: 768px) {
      .activities-grid {
        grid-template-columns: 1fr;
      }
      
      .activity-footer {
        flex-direction: column;
        gap: 1rem;
      }
      
      .activity-footer .btn {
        width: 100%;
      }
    }
  `]
})
export class ActivitiesComponent {
  selectedCategory = signal('All');
  hoveredActivity = signal<number | null>(null);

  categories = signal(['All', 'Trekking', 'Adventure Sports', 'Nature']);
  categories = signal(['All', 'Kashmir Tours', 'Ladakh Adventures', 'Cultural']);

  activities = signal<Activity[]>([
    {
      id: 1,
      name: 'Shikara Ride',
      icon: '🚣',
      description: 'Glide through the serene waters of Dal Lake in traditional Kashmiri boats.',
      difficulty: 'Medium',
      duration: '1-2 hours',
      price: '₹800/person'
    },
    {
      id: 2,
      name: 'Ladakh Bike Tour',
      icon: '🏍️',
      description: 'Experience the thrill of riding through the highest motorable passes in the world.',
      difficulty: 'Hard',
      duration: '7-14 days',
      price: '₹25,000/person'
    },
    {
      id: 3,
      name: 'Kashmir Photography',
      icon: '📸',
      description: 'Capture the ethereal beauty of Kashmir valleys, gardens, and traditional life.',
      difficulty: 'Easy',
      duration: '3-5 days',
      price: '₹8,000/person'
    },
    {
      id: 4,
      name: 'Monastery Tours',
      icon: '🏛️',
      description: 'Visit ancient Buddhist monasteries and experience the spiritual culture of Ladakh.',
      difficulty: 'Medium',
      duration: '4-6 hours',
      price: '₹2,500/person'
    },
    {
      id: 5,
      name: 'Houseboat Stay',
      icon: '🏠',
      description: 'Experience luxury floating accommodations on the pristine Dal Lake.',
      difficulty: 'Easy',
      duration: '1-3 nights',
      price: '₹4,000/night'
    },
    {
      id: 6,
      name: 'Trekking',
      icon: '⛺',
      description: 'Trek through pristine valleys, high altitude lakes, and mountain passes.',
      difficulty: 'Medium',
      duration: '3-10 days',
      price: '₹12,000/person'
    },
    {
      id: 7,
      name: 'Skiing in Gulmarg',
      icon: '⛷️',
      description: 'Experience world-class skiing on the pristine slopes of Gulmarg.',
      difficulty: 'Hard',
      duration: '1-5 days',
      price: '₹6,000/day'
    }
  ]);

  filteredActivities = signal<Activity[]>(this.activities());

  selectCategory(category: string) {
    this.selectedCategory.set(category);
    
    if (category === 'All') {
      this.filteredActivities.set(this.activities());
    } else {
      // Simple filtering logic - in a real app, you'd have proper categorization
      const filtered = this.activities().filter(activity => {
        switch (category) {
          case 'Kashmir Tours':
            return activity.name.includes('Shikara') || activity.name.includes('Houseboat') || activity.name.includes('Kashmir') || activity.name.includes('Skiing');
          case 'Ladakh Adventures':
            return activity.name.includes('Ladakh') || activity.name.includes('Bike') || activity.name.includes('Monastery') || activity.name.includes('Trekking');
          case 'Cultural':
            return activity.name.includes('Monastery') || activity.name.includes('Photography') || activity.name.includes('Houseboat');
          default:
            return true;
        }
      });
      this.filteredActivities.set(filtered);
    }
  }

  setHoveredActivity(id: number | null) {
    this.hoveredActivity.set(id);
  }
}
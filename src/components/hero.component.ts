import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="hero-background"></div>
      <div class="hero-overlay"></div>
      
      <div class="hero-content container">
        <div class="hero-text">
          <h1 class="hero-title fade-in-up">
            Explore the Paradise of
            <span class="highlight">Kashmir & Ladakh</span>
          </h1>
          <p class="hero-subtitle fade-in-up">
            Discover the crown jewel of India - from the serene valleys of Kashmir to the 
            rugged beauty of Ladakh. Experience paradise on earth with our curated tours.
          </p>
          
          <div class="hero-buttons fade-in-up">
            <a href="#destinations" class="btn btn-primary">Explore Destinations</a>
            <a href="#activities" class="btn btn-secondary">Kashmir Tours</a>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 100vh;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    
    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop') center/cover;
      background: url('https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop') center/cover;
      transform: scale(1.1);
      transition: transform 10s ease;
    }
    
    .hero:hover .hero-background {
      transform: scale(1);
    }
    
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(30, 58, 138, 0.8), rgba(6, 95, 70, 0.6));
    }
    
    .hero-content {
      position: relative;
      z-index: 2;
      text-align: center;
      color: white;
      max-width: 800px;
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }
    
    .highlight {
      background: linear-gradient(135deg, #ea580c, #dc2626);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .hero-subtitle {
      font-size: 1.3rem;
      margin-bottom: 3rem;
      opacity: 0.9;
      line-height: 1.6;
    }
    
    .hero-buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      animation: bounce 2s infinite;
    }
    
    .scroll-arrow {
      width: 2px;
      height: 40px;
      background: white;
      position: relative;
    }
    
    .scroll-arrow::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: -4px;
      width: 10px;
      height: 10px;
      border: 2px solid white;
      border-top: none;
      border-left: none;
      transform: rotate(45deg);
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      40% {
        transform: translateX(-50%) translateY(-10px);
      }
      60% {
        transform: translateX(-50%) translateY(-5px);
      }
    }
    
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.1rem;
      }
      
      .hero-buttons {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class HeroComponent {}
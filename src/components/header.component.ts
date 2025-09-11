import { Component, signal, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled()">
      <div class="container">
        <nav class="nav">
          <div class="logo">
            <h2>Magical Mountain</h2>
          </div>
          
          <div class="nav-links" [class.active]="mobileMenuOpen()">
            <a href="#home" (click)="closeMobileMenu()">Home</a>
            <a href="#destinations" (click)="closeMobileMenu()">Destinations</a>
            <a href="#activities" (click)="closeMobileMenu()">Activities</a>
            <a href="#gallery" (click)="closeMobileMenu()">Gallery</a>
            <a href="#contact" (click)="closeMobileMenu()">Contact</a>
          </div>
          
          <button class="mobile-menu-btn" (click)="toggleMobileMenu()" [class.active]="mobileMenuOpen()">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      transition: all 0.3s ease;
      background: rgba(30, 58, 138, 0.1);
      backdrop-filter: blur(10px);
    }
    
    .header.scrolled {
      background: rgba(30, 58, 138, 0.95);
      backdrop-filter: blur(20px);
    }
    
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }
    
    .logo h2 {
      color: white;
      font-weight: 700;
      font-size: 1.5rem;
    }
    
    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }
    
    .nav-links a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
    }
    
    .nav-links a:hover {
      color: #ea580c;
    }
    
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: #ea580c;
      transition: width 0.3s ease;
    }
    
    .nav-links a:hover::after {
      width: 100%;
    }
    
    .mobile-menu-btn {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
    }
    
    .mobile-menu-btn span {
      width: 25px;
      height: 3px;
      background: white;
      margin: 3px 0;
      transition: all 0.3s ease;
    }
    
    .mobile-menu-btn.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
      opacity: 0;
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
    
    @media (max-width: 768px) {
      .mobile-menu-btn {
        display: flex;
      }
      
      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(30, 58, 138, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 2rem;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }
      
      .nav-links.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
      
      .nav-links a {
        padding: 1rem 0;
        font-size: 1.1rem;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(open => !open);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}
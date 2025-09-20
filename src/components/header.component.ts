import { Component, signal, HostListener } from '@angular/core';
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
    /* ========== HEADER BASE ========== */
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      transition: background 0.3s ease, box-shadow 0.3s;
      background: rgba(30, 58, 138, 0.1);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 8px rgba(30,58,138,0.04);
    }

    .header.scrolled {
      background: rgba(30, 58, 138, 0.95);
      box-shadow: 0 4px 24px rgba(30,58,138,0.10);
      backdrop-filter: blur(20px);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      width: 100%;
      margin-top:20px;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.7rem 0;
      position: relative; /* Ensure nav is the positioning context */
      min-height: 56px;
    }

    .logo h2 {
      color: white;
      font-weight: 800;
      font-size: 1.4rem;
      letter-spacing: 1px;
      margin: 0;
      text-shadow: 0 2px 8px rgba(30,58,138,0.10);
      transition: color 0.3s;
    }

    /* ========== NAV LINKS (MOBILE FIRST) ========== */
    .nav-links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      top: 110%;
      left: -10px;
      right: 0;
      background: rgba(30, 58, 138, 0.92);
      backdrop-filter: blur(18px);
      border-radius: 0 0 18px 18px;
      box-shadow: 0 8px 32px rgba(30,58,138,0.18);
      padding: 1.2rem 1.2rem 1.4rem 1.2rem;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-10px) scaleY(0.98);
      transition: opacity 0.35s cubic-bezier(.4,0,.2,1), transform 0.35s cubic-bezier(.4,0,.2,1);
      z-index: 1001;
      width: 100%; /* Make menu match nav/container width */
    }

    .nav-links.active {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0) scaleY(1);
    }

    .nav-links a {
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.13rem;
      padding: 0.85rem 0;
      width: 100%;
      border-radius: 8px;
      margin-bottom: 0.2rem;
      letter-spacing: 0.5px;
      transition: background 0.2s, color 0.2s, box-shadow 0.2s;
      position: relative;
      box-shadow: none;
    }

    .nav-links a:last-child {
      margin-bottom: 0;
    }

    .nav-links a:hover,
    .nav-links a:focus {
      background: rgba(234, 88, 12, 0.13);
      color: #ea580c;
      box-shadow: 0 2px 8px rgba(234,88,12,0.08);
    }

    /* Optional: Active link highlight (if you want to add logic for active link) */
    /* .nav-links a.active {
      background: #ea580c;
      color: #fff;
    } */

    /* ========== MOBILE MENU BUTTON ========== */
    .mobile-menu-btn {
      display: flex;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: 6px;
      z-index: 1002;
      border-radius: 8px;
      transition: background 0.2s;
      outline: none;
      box-shadow: none;
    }

    .mobile-menu-btn:active,
    .mobile-menu-btn:focus {
      background: rgba(234, 88, 12, 0.13);
    }

    .mobile-menu-btn span {
      width: 28px;
      height: 3.5px;
      background: white;
      margin: 3.5px 0;
      border-radius: 2px;
      transition: all 0.3s cubic-bezier(.4,0,.2,1);
      display: block;
    }

    .mobile-menu-btn.active span:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }

    .mobile-menu-btn.active span:nth-child(2) {
      opacity: 0;
    }

    .mobile-menu-btn.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }

    /* ========== DESKTOP NAV ========== */
    @media (min-width: 769px) {
      .nav-links {
        display: flex !important;
        opacity: 1 !important;
        pointer-events: auto !important;
        position: static;
        flex-direction: row;
        gap: 2rem;
        background: transparent;
        backdrop-filter: none;
        box-shadow: none;
        border-radius: 0;
        padding: 0;
        align-items: center;
        transform: none !important;
      }

      .nav-links a {
        font-size: 1rem;
        padding: 0;
        border-radius: 0;
        margin-bottom: 0;
        background: none;
        color: #fff;
        box-shadow: none;
      }

      .nav-links a:hover,
      .nav-links a:focus {
        background: none;
        color: #ea580c;
        box-shadow: none;
      }

      .mobile-menu-btn {
        display: none;
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

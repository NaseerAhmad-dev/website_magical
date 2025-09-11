import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Magical Mountain</h3>
            <p>
              Your gateway to Kashmir and Ladakh's incredible beauty. We create unforgettable 
              experiences in paradise on earth - from serene valleys to majestic peaks.
            </p>
            <div class="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#activities">Activities</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Kashmir Tours</a></li>
              <li><a href="#">Ladakh Adventures</a></li>
              <li><a href="#">Houseboat Stays</a></li>
              <li><a href="#">Group Bookings</a></li>
              <li><a href="#">Custom Packages</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Contact Info</h4>
            <div class="contact-info">
              <p>📍 123 Mountain View Road<br>Hill Station, India 123456</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info&#64;magicalmountain.in</p>
            </div>
            
            <div class="newsletter">
              <h5>Subscribe to Newsletter</h5>
              <div class="newsletter-form">
                <input type="email" placeholder="Enter your email">
                <button class="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p>&copy; 2025 Magical Mountain. All rights reserved.</p>
            <div class="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #1e3a8a 0%, #065f46 100%);
      color: white;
      padding: 3rem 0 0;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2.5rem;
      margin-bottom: 2rem;
    }
    
    .footer-section h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #ea580c;
    }
    
    .footer-section h4 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: white;
    }
    
    .footer-section h5 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: white;
    }
    
    .footer-section p {
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 1.5rem;
    }
    
    .footer-section ul {
      list-style: none;
      padding: 0;
    }
    
    .footer-section ul li {
      margin-bottom: 0.5rem;
    }
    
    .footer-section ul li a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    .footer-section ul li a:hover {
      color: #ea580c;
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
    }
    
    .social-links a {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }
    
    .social-links a:hover {
      background: #ea580c;
      transform: translateY(-2px);
    }
    
    .contact-info p {
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }
    
    .newsletter {
      margin-top: 1.5rem;
    }
    
    .newsletter-form {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    
    .newsletter-form input {
      flex: 1;
      padding: 0.6rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      font-size: 0.9rem;
    }
    
    .newsletter-form input::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
    
    .newsletter-form input:focus {
      outline: none;
      border-color: #ea580c;
      background: rgba(255, 255, 255, 0.15);
    }
    
    .newsletter-form button {
      padding: 0.6rem 1rem;
      font-size: 0.9rem;
      white-space: nowrap;
    }
    
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      padding: 1.5rem 0;
    }
    
    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .footer-bottom p {
      margin: 0;
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
    }
    
    .footer-links {
      display: flex;
      gap: 2rem;
    }
    
    .footer-links a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }
    
    .footer-links a:hover {
      color: #ea580c;
    }
    
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .newsletter-form {
        flex-direction: column;
      }
      
      .footer-bottom-content {
        flex-direction: column;
        text-align: center;
      }
      
      .footer-links {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {}
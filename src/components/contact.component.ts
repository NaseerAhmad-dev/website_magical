import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="section contact">
      <div class="container">
        <h2 class="section-title">Plan Your Adventure</h2>
        <p class="section-subtitle">
          Ready to explore the mountains? Get in touch with us to plan your perfect mountain adventure. 
          Our team of experts is here to help you create unforgettable memories.
        </p>
        
        <div class="contact-content">
          <div class="contact-info">
            <div class="info-card">
              <div class="info-icon">📍</div>
              <div class="info-details">
                <h4>Visit Us</h4>
                <p>123 Mountain View Road<br>Hill Station, India 123456</p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-icon">📞</div>
              <div class="info-details">
                <h4>Call Us</h4>
                <p>+91 98765 43210<br>+91 87654 32109</p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-icon">✉️</div>
              <div class="info-details">
                <h4>Email Us</h4>
                <p>info&#64;magicalmountain.in<br>bookings&#64;magicalmountain.in</p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-icon">⏰</div>
              <div class="info-details">
                <h4>Office Hours</h4>
                <p>Mon - Sat: 9:00 AM - 7:00 PM<br>Sun: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    formControlName="firstName"
                    [class.error]="isFieldInvalid('firstName')"
                    placeholder="Enter your first name"
                  >
                  <div class="error-message" *ngIf="isFieldInvalid('firstName')">
                    First name is required
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    formControlName="lastName"
                    [class.error]="isFieldInvalid('lastName')"
                    placeholder="Enter your last name"
                  >
                  <div class="error-message" *ngIf="isFieldInvalid('lastName')">
                    Last name is required
                  </div>
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    formControlName="email"
                    [class.error]="isFieldInvalid('email')"
                    placeholder="Enter your email"
                  >
                  <div class="error-message" *ngIf="isFieldInvalid('email')">
                    Please enter a valid email address
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    formControlName="phone"
                    [class.error]="isFieldInvalid('phone')"
                    placeholder="Enter your phone number"
                  >
                  <div class="error-message" *ngIf="isFieldInvalid('phone')">
                    Phone number is required
                  </div>
                </div>
              </div>
              
              <div class="form-group">
                <label for="destination">Preferred Destination</label>
                <select 
                  id="destination" 
                  formControlName="destination"
                  [class.error]="isFieldInvalid('destination')"
                >
                  <option value="">Select a destination</option>
                  <option value="srinagar-dal-lake">Srinagar & Dal Lake</option>
                  <option value="leh-ladakh">Leh Ladakh</option>
                  <option value="gulmarg">Gulmarg</option>
                  <option value="pahalgam">Pahalgam</option>
                  <option value="sonamarg">Sonamarg</option>
                </select>
                <div class="error-message" *ngIf="isFieldInvalid('destination')">
                  Please select a destination
                </div>
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  formControlName="message"
                  [class.error]="isFieldInvalid('message')"
                  rows="5"
                  placeholder="Tell us about your dream Kashmir or Ladakh tour..."
                ></textarea>
                <div class="error-message" *ngIf="isFieldInvalid('message')">
                  Please tell us about your adventure plans
                </div>
              </div>
              
              <button 
                type="submit" 
                class="btn btn-primary submit-btn"
                [disabled]="contactForm.invalid || isSubmitting()"
              >
                <span *ngIf="!isSubmitting()">Send Message</span>
                <span *ngIf="isSubmitting()">Sending...</span>
              </button>
            </form>
            
            <div class="success-message" *ngIf="showSuccessMessage()">
              ✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 4rem;
      margin-top: 3rem;
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .info-card {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.5rem;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    
    .info-card:hover {
      transform: translateY(-2px);
    }
    
    .info-icon {
      font-size: 1.5rem;
      padding: 0.8rem;
      background: linear-gradient(135deg, #ea580c, #dc2626);
      color: white;
      border-radius: 10px;
      min-width: 3rem;
      text-align: center;
    }
    
    .info-details h4 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1e3a8a;
      margin-bottom: 0.5rem;
    }
    
    .info-details p {
      color: #6b7280;
      line-height: 1.5;
    }
    
    .contact-form {
      background: white;
      padding: 2.5rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      font-weight: 500;
      color: #374151;
      margin-bottom: 0.5rem;
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 0.8rem 1rem;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
      font-family: inherit;
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #ea580c;
      box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1);
    }
    
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
      border-color: #dc2626;
    }
    
    .error-message {
      color: #dc2626;
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }
    
    .submit-btn {
      width: 100%;
      padding: 1rem;
      font-size: 1.1rem;
      font-weight: 600;
    }
    
    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .success-message {
      background: #d1fae5;
      color: #065f46;
      padding: 1rem;
      border-radius: 8px;
      margin-top: 1.5rem;
      text-align: center;
      font-weight: 500;
    }
    
    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .form-row {
        grid-template-columns: 1fr;
        gap: 0;
      }
      
      .contact-form {
        padding: 1.5rem;
      }
    }
  `]
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  
  isSubmitting = signal(false);
  showSuccessMessage = signal(false);

  contactForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    destination: ['', [Validators.required]],
    message: ['', [Validators.required]]
  });

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field?.invalid && (field?.dirty || field?.touched));
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.showSuccessMessage.set(true);
        this.contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage.set(false);
        }, 5000);
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
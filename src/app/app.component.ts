import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faInstagram,
  faWhatsapp,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frank-were';
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faXTwitter = faXTwitter;

  public openWhatsApp() {
    const phone = '+254115984633';
    const message = encodeURIComponent('Hello, Frank i need you to..');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }
}

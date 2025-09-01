import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  standalone: false,
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
    // Track which accordion item is currently open
  openSection: string | null = null;

  toggleSection(section: string) {
    this.openSection = this.openSection === section ? null : section;
  }
}

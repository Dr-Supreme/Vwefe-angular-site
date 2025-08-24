import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  navLinks = [
    { label: 'Login', route: '/' },
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Projects', route: '/projects' },
    { label: 'Contact', route: '/contact' }
  ];

}

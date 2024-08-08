import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showMenu = false;
  navigation = {
    items: [
      { text: 'Home', url: '/' },
      { text: 'About', url: '/about' },
      { text: 'Services', url: '/services' },
      { text: 'Contact', url: '/contact' },
    ],
  };
  settings = {
    logo: 'assets/GOMPASS PRIMARY LOGO.svg', // Replace with your logo path or remove if not needed
    site_name: 'Your Site Name',
  };

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

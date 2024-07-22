import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isScrollingUp: boolean = true;
  lastScrollTop: number = 0;
  isScrollingDown: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrollingUp = st < this.lastScrollTop;
    this.lastScrollTop = st <= 0 ? 0 : st;
    this.isScrollingDown = st! > 0;
  }
}

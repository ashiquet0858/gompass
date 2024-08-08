import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  settings = {
    siteName: 'Site Name',
  };

  footer = {
    sectionOneTitle: 'Section One',
    sectionOneLinks: [
      { url: '/link1', text: 'Link 1' },
      { url: '/link2', text: 'Link 2' },
      { url: '/link3', text: 'Link 3' },
    ],
    sectionTwoTitle: 'Section Two',
    sectionTwoLinks: [
      { url: '/link4', text: 'Link 4' },
      { url: '/link5', text: 'Link 5' },
      { url: '/link6', text: 'Link 6' },
    ],
    sectionThreeTitle: 'Section Three',
    sectionThreeLinks: [
      { url: '/link7', text: 'Link 7' },
      { url: '/link8', text: 'Link 8' },
      { url: '/link9', text: 'Link 9' },
    ],
    copyright: '© 2024 Your Company. All rights reserved.',
  };
}

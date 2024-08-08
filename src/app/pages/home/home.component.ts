import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  home = {
    title: 'Your Home Title',
    buttonLink: '/button-link',
    buttonText: 'Button Text',
    linkOne: '/link-one',
    linkOneText: 'Link One Text',
    linkTwo: '/link-two',
    linkTwoText: 'Link Two Text',
    image: 'assets/gompassoutlet.jpeg',
    fullScreenImage: 'assets/fullScreen.jpeg',
    ctaTitle: 'Call to Action Title',
    ctaDescription: 'Call to Action Description',
    footerCtaTitle: 'Footer Call to Action Title',
    footerCtaDescription: 'Footer Call to Action Description',
    footerCtaButtonLink: '/footer-cta-button-link',
    footerCtaButtonText: 'Footer CTA Button Text',
    footerCtaImage: 'path/to/footer-cta-image.jpg',
  };

  posts = [
    {
      url: '/post-1',
      data: {
        image: 'assets/post1.jpeg',
        title: 'Post 1 Title',
        description: 'Post 1 Description',
      },
    },
    {
      url: '/post-2',
      data: {
        image: 'path/to/post-2-image.jpg',
        title: 'Post 2 Title',
        description: 'Post 2 Description',
      },
    },
  ];

  categories = [
    {
      url: '/category-1',
      data: {
        image: 'path/to/category-1-image.jpg',
        title: 'Category 1 Title',
      },
    },
    {
      url: '/category-2',
      data: {
        image: 'path/to/category-2-image.jpg',
        title: 'Category 2 Title',
      },
    },
    {
      url: '/category-3',
      data: {
        image: 'path/to/category-3-image.jpg',
        title: 'Category 3 Title',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

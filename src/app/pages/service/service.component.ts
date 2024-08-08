import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements AfterViewInit {
  sections = [
    {
      id: 'tours',
      title: 'Tours',
      subtitle:
        'Discover exciting destinations through our specially curated tours for different groups.',
      items: [
        {
          title: 'School Tour',
          description:
            'Perfect educational experiences designed for school students.',
        },
        {
          title: 'College Tour',
          description:
            'Exciting adventures and learning opportunities for college students.',
        },
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1502209926533-1c4a8b1740b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjB0b3VyfGVufDB8fHx8MTY5Mjc1MjU3NA&ixlib=rb-4.0.3&q=80&w=1920',
    },
    {
      id: 'holiday-rentals',
      title: 'Holiday Rentals',
      subtitle:
        'Find the perfect place to stay with our variety of holiday rental options.',
      items: [
        {
          title: 'Resort',
          description:
            'Luxurious stays with top-notch amenities and stunning views.',
        },
        {
          title: 'Home Stay',
          description: 'Experience local culture with a cozy home stay.',
        },
        {
          title: 'Cab Rentals',
          description:
            'Convenient transportation options for your travel needs.',
        },
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1544625501-8c31d5d47f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxob2xpaGF5IHJlbmFsdHxlbnwwfDB8fHwyMDY5NzY3OTY&ixlib=rb-4.0.3&q=80&w=1920',
    },
    {
      id: 'ticket-booking',
      title: 'Ticket Booking',
      subtitle:
        'Easily book tickets for your travel needs with our streamlined process.',
      items: [
        {
          title: 'Flight',
          description: 'Book flights to various destinations around the globe.',
        },
        {
          title: 'Train',
          description: 'Secure your train tickets for a comfortable journey.',
        },
        {
          title: 'Bus',
          description: 'Affordable and convenient bus tickets for your travel.',
        },
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1566452281-b3884fa4f98d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHx0aWNrZXQgbmF2aWdhdGlvbnxlbnwwfDB8fHwxNjkwMDk0NjUy&ixlib=rb-4.0.3&q=80&w=1920',
    },
  ];

  ngAfterViewInit() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const scrollEffectElements = document.querySelectorAll('.scroll-effect');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    fadeElements.forEach((element) => observer.observe(element));
    scrollEffectElements.forEach((element) => observer.observe(element));
  }
}

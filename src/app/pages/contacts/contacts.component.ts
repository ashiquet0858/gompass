import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  contact = {
    title: 'Contact Us',
    description: 'Get in touch with us via the following methods.',
    tel: '123-456-7890',
    email: 'contact@example.com',
    opening_times: 'Mon - Fri, 9am - 5pm',
    address: '123 Main St, Anytown, USA',
  };
}

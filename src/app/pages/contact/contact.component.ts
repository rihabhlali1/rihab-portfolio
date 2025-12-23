import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  portfolioViews = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Send a view to backend when someone opens the portfolio
    this.http.post<{ views: number }>('http://localhost:3000/api/view', {})
      .subscribe({
        next: (res) => {
          this.portfolioViews = res.views;
          console.log(`Portfolio viewed ${this.portfolioViews} times`);
        },
        error: (err) => console.error('Error sending view:', err)
      });
  }

  sendMessage() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      // Send the message to backend
      this.http.post('http://localhost:3000/api/contact', this.contact)
        .subscribe({
          next: (res: any) => {
            alert('Message sent! Thank you.');
            this.contact = { name: '', email: '', message: '' };
          },
          error: (err) => {
            console.error('Error sending message:', err);
            alert('Failed to send message. Please try again later.');
          }
        });
    } else {
      alert('Please fill all fields.');
    }
  }
}

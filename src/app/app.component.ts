import { Component, OnInit } from '@angular/core';
import { ViewService } from './services/view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  views: number = 0;

  constructor(private viewService: ViewService) {}

  ngOnInit(): void {
    // Increment view when the page loads
    this.viewService.incrementView().subscribe({
      next: (res) => this.views = res.views,
      error: (err) => console.error(err)
    });
  }
}
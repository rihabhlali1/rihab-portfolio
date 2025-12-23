import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: false
})
export class ExperienceComponent implements AfterViewInit {

  experiences = [
    {
      role: 'Research Intern',
      company: 'Mitacs Canada',
      year: '2025',
      description: 'Applied research focused on automatic vulnerability detection using deep learning models...',
      skills: ['Python', 'Deep Learning', 'SAST', 'AI Security']
    },
    {
      role: 'DevOps Intern',
      company: 'Artibedded, Sfax',
      year: '2024',
      description: 'Responsible for complete dockerization of development environments and automation of CI/CD pipelines...',
      skills: ['Docker', 'GitLab CI/CD', 'SonarQube', 'Trivy']
    },
    {
      role: 'Web Development Intern',
      company: 'Flesk Consulting',
      year: '2024',
      description: 'Developed an e-commerce platform using Angular and .NET Core...',
      skills: ['Angular', '.NET Core', 'REST API', 'Authentication']
    }
  ];

  @ViewChildren('experienceCard') experienceCards!: QueryList<ElementRef>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      this.experienceCards.forEach(card =>
        observer.observe(card.nativeElement)
      );
    }
  }
}

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
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: false
})
export class ProjectsComponent implements AfterViewInit {

  projects = [
    {
      title: 'Parapharmacy Web Application',
      description:
        'Full-stack web platform with product catalog, cart, orders, and secure authentication. REST API with Spring Boot and responsive Angular frontend following clean architecture.',
      tech: ['Spring Boot', 'Angular', 'REST API', 'Authentication']
    },
    {
      title: 'Network Security with Firewall & IDS',
      description:
        'Designed a secure network architecture integrating firewall and Snort IDS. Performed traffic monitoring, attack simulations, log analysis, and incident response planning.',
      tech: ['Firewall', 'Snort', 'IDS/IPS', 'Network Security']
    },
    {
      title: 'Information System Audit',
      description:
        'Conducted a complete IS audit including asset inventory, risk analysis, vulnerability identification, and ISO 27001-aligned recommendations.',
      tech: ['ISO 27001', 'Risk Assessment', 'Auditing']
    },
    {
      title: 'Web Application Security (OAuth 2.0)',
      description:
        'Implemented OAuth 2.0 authentication with secure token handling and protections against XSS, CSRF, and token hijacking following Zero Trust principles.',
      tech: ['OAuth 2.0', 'Web Security', 'Zero Trust']
    },
    {
      title: 'Complete DevSecOps Pipeline',
      description:
        'Built a secure CI/CD pipeline with SAST, container scanning, IaC analysis, and Kubernetes deployment using quality gates.',
      tech: ['GitLab CI/CD', 'SonarQube', 'Trivy', 'Kubernetes']
    }
  ];

  @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;

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

      this.projectCards.forEach(card =>
        observer.observe(card.nativeElement)
      );
    }
  }
}

import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: false
})
export class SkillsComponent implements AfterViewInit {
  skillCategories = [
    { name: 'Sécurité Réseau', icon: '🔐', skills: ['Wireshark', 'Snort', 'IDS/IPS', 'Firewalling', 'Audits'] },
    { name: 'DevSecOps & Cloud', icon: '☁️', skills: ['Docker', 'GitLab CI/CD', 'Kubernetes', 'Terraform', 'Jenkins', 'Ansible', 'AWS', 'Azure', 'GCP'] },
    { name: 'Programmation', icon: '💻', skills: ['Python', 'C', 'Java', 'JavaScript', 'PHP', 'Angular', '.NET Core', 'Spring Boot'] },
    { name: 'Outils & Technologies', icon: '🛠️', skills: ['Postman', 'Swagger', 'Prometheus', 'Grafana', 'SonarQube', 'Trivy'] },
    { name: 'Bases de Données', icon: '🗄️', skills: ['SQL', 'Oracle'] },
    { name: 'IA & Machine Learning', icon: '🤖', skills: ['Deep Learning', 'ML-based vulnerability detection'] }
  ];

  additionalSkills = [
    'Linux/Windows',
    'Network Analysis',
    'Cloud Security',
    'Automation'
  ];

  @ViewChildren('skillCard') skillCards!: ElementRef[];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Run only in the browser
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
        { threshold: 0.15 }
      );

      this.skillCards.forEach(card =>
        observer.observe(card.nativeElement)
      );
    }
  }
}

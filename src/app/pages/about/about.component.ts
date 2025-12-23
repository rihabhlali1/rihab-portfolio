import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  profileText = `
  Telecommunications engineer recently graduated with a strong technical background in
  networking, cybersecurity, cloud computing, and software development.
  Through multiple internships and academic projects, I worked on securing infrastructures
  (firewalls, IDS/IPS), DevSecOps pipelines, system audits, and vulnerability detection using
  deep learning models.
  Motivated, autonomous, and curious, I am eager to contribute to a technical team while
  continuously improving my skills.
    `;
  
    education = [
      {
        title: 'Telecommunications Engineering',
        place: 'ENET’Com, Sfax',
        period: '2022 – 2025'
      },
      {
        title: 'Preparatory Cycle',
        place: 'Faculty of Science, Monastir',
        period: '2020 – 2022'
      }
    ];
  
    certifications = [
      {
        name: 'EF SET English Certificate – C1',
        issuer: 'EF Standard English Test',
        link: 'https://cert.efset.org/en/YwFfGo'
      },
      {
        name: 'DevNet Associate',
        issuer: 'Cisco',
        link: 'https://www.credly.com/badges/0383f6cb-aed7-43a7-aa6f-fe3241d119d8/public_url'
      },
      {
        name: 'CCNA: Introduction to Networks',
        issuer: 'Cisco',
        link: 'https://www.credly.com/badges/e9d892b2-b1c2-4452-ab96-5bdd7d79a52b/public_url'
      },
      {
        name: 'Introduction to Cybersecurity',
        issuer: 'Cisco',
        link: 'https://www.credly.com/badges/89930c55-f7e2-4cae-9e2a-07fcb484eecd/public_url'
      }
    ];
}

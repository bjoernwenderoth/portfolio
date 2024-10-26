import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {
  projects = [
    {
      title: 'Join',
      technologies: 'JavaScript | HTML | CSS | Firebase',
      descriptionKey: 'PROJECT_COMPONENT.DESCRIPTION_JOIN',
      img: 'join_photo',
      liveTestLink: 'https://join.bjoern-wenderoth.de/',
      githubLink: 'https://github.com/bjoernwenderoth/join',
    },
    {
      title: 'El pollo Loco',
      technologies: 'JavaScript | HTML | CSS',
      descriptionKey: 'PROJECT_COMPONENT.DESCRIPTION_ELPOLLOLOCO',
      img: 'elpolloloco_photo',
      liveTestLink: 'https://elpolloloco.bjoern-wenderoth.de/',
      githubLink: 'https://github.com/bjoernwenderoth/elpolloloco-game',
    },
    {
      title: 'Pokédex',
      technologies: 'JavaScript | HTML | CSS | API',
      descriptionKey: 'PROJECT_COMPONENT.DESCRIPTION_POKEDEX',
      img: 'pokedex_photo',
      liveTestLink: 'https://pokedex.bjoern-wenderoth.de/',
      githubLink: 'https://github.com/bjoernwenderoth/pokedex',
    }
  ];

  screenWidth: number;
  constructor() {
    this.screenWidth = window.innerWidth;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = (event.target as Window).innerWidth;
  }

  isWideScreen(): boolean {
    return this.screenWidth > 1100; // Überprüfung der Bildschirmbreite
  }
  
  goToLink(url: string) {
    window.open(url, '_blank');
  }
}

import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Join',
      technologies: 'Angular | Typescript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: 'join_photo',
      liveTestLink: '#', // Link zum Live-Test
      githubLink: '#',   // Link zum GitHub-Repository
    },
    {
      title: 'El pollo Loco',
      technologies: 'Javascript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and poison bottles to fight against the killer chicken.',
      img: 'elpolloloco_photo',
      liveTestLink: '#', // Link zum Live-Test
      githubLink: '#',   // Link zum GitHub-Repository
    },
    {
      title: 'Pokédex',
      technologies: 'Javascript | HTML | CSS | API',
      description: 'Based on the PokéAPI, a simple library that provides and catalogues Pokémon information.',
      img: 'pokedex_photo',
      liveTestLink: '#', // Link zum Live-Test
      githubLink: '#',   // Link zum GitHub-Repository
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
    return this.screenWidth > 770; // Überprüfung der Bildschirmbreite
  }
  
  goToLink(url: string) {
    window.open(url, '_blank');
  }
}

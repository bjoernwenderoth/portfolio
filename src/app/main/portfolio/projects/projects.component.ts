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
      technologies: 'Javacript | HTML | CSS | Firebase',
      description: 'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      // description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: 'join_photo',
      liveTestLink: 'https://join.bjoern-wenderoth.de/',
      githubLink: 'https://github.com/bjoernwenderoth/join',
    },
    {
      title: 'El pollo Loco',
      technologies: 'Javascript | HTML | CSS',
      description: 'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Giftflaschen zu finden, um gegen das Killerhuhn zu kämpfen.',
      // description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and poison bottles to fight against the killer chicken.',
      img: 'elpolloloco_photo',
      liveTestLink: 'https://elpolloloco.bjoern-wenderoth.de/',
      githubLink: 'https://github.com/bjoernwenderoth/elpolloloco-game',
    },
    {
      title: 'Pokédex',
      technologies: 'Javascript | HTML | CSS | API',
      description: 'Basiert auf der PokéAPI, einer einfachen Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',
      // description: 'Based on the PokéAPI, a simple library that provides and catalogues Pokémon information.',
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

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  logos = [
    { imgSrc: './../../../assets/img/icons/html_icon.png', altText: 'html_icon', labelText: 'HTML' },
    { imgSrc: './../../../assets/img/icons/css_icon.png', altText: 'css_icon', labelText: 'CSS' },
    { imgSrc: './../../../assets/img/icons/javascript_icon.png', altText: 'javascript_icon', labelText: 'JavaScript' },
    { imgSrc: './../../../assets/img/icons/typescript_icon.png', altText: 'typescript_icon', labelText: 'TypeScript' },
    { imgSrc: './../../../assets/img/icons/angular_icon.png', altText: 'angular_icon', labelText: 'Angular' },
    { imgSrc: './../../../assets/img/icons/firebase_icon.png', altText: 'firebase_icon', labelText: 'Firebase' },
    { imgSrc: './../../../assets/img/icons/git_icon.png', altText: 'git_icon', labelText: 'GIT' },
    { imgSrc: './../../../assets/img/icons/api_icon.png', altText: 'api_icon', labelText: 'Rest-Api' },
    { imgSrc: './../../../assets/img/icons/scrum_icon.png', altText: 'scrum_icon', labelText: 'Scrum' },
    { imgSrc: './../../../assets/img/icons/material_design_icon.png', altText: 'material_design_icon', labelText: 'Material Design' },
  ];

  ngAfterViewInit() {
    this.toggleButtonVisibility();
    window.addEventListener('resize', this.toggleButtonVisibility.bind(this));
  }

  toggleButtonVisibility() {
    const upperButton = document.getElementById('btnContactMobile') as HTMLButtonElement | null;
    const lowerButton = document.getElementById('btnContact') as HTMLButtonElement | null;

    if (window.innerWidth <= 769) {
      if (upperButton) upperButton.classList.remove('d-none');
      if (lowerButton) lowerButton.classList.add('d-none');
    } else {
      if (upperButton) upperButton.classList.add('d-none');
      if (lowerButton) lowerButton.classList.remove('d-none');
    }
  }
  
}


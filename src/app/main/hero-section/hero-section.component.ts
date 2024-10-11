import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}

window.addEventListener('resize', setDynamicImage);
window.addEventListener('load', setDynamicImage);

function setDynamicImage() {
    const imageElement = document.getElementById('dynamicImage') as HTMLImageElement;

    if (window.innerWidth <= 769) {
        imageElement.src = './../../../assets/img/background-images/bow_hero_mobile.png';
    } else {
        imageElement.src = './../../../assets/img/background-images/bow_hero.png';
    }
}

import { NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslateModule, NgStyle],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  isMobile: boolean = false;
  imagePath: string = '/assets/img/background-images/bow_hero.png';

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 899;
    this.updateImagePath();
  }

  private updateImagePath() {
    this.imagePath = this.isMobile 
      ? '/assets/img/background-images/bow_hero_mobile.png'
      : '/assets/img/background-images/bow_hero.png';
  }
}
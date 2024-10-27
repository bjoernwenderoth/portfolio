import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
 
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  src: string = '/assets/img/background-images/bow_hero.png';
  private resizeListener: () => void;
 
  constructor() {
    this.resizeListener = this.onResize.bind(this);
  }
 
  ngOnInit() {
    this.updateImageSource();
    window.addEventListener('resize', this.resizeListener);
  }
 
  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeListener);
  }
 
  private onResize() {
    this.updateImageSource();
  }
 
  private updateImageSource() {
    const isMobile = window.innerWidth <= 769;
    this.src = isMobile
      ? '/assets/img/background-images/bow_hero_mobile.png'
      : '/assets/img/background-images/bow_hero.png';
  }
}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { ImprintComponent } from '../imprint/imprint.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    ImprintComponent,
    RouterModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, OnDestroy {

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


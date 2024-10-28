import { NgStyle } from '@angular/common';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
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

  // Check screen size on component initialization
  ngOnInit() {
    this.checkScreenSize();
  }

  // Listen to window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  // Method to check if the screen width is less than or equal to 768px
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }
}

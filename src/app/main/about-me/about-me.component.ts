import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'animate-slide-in');
          observer.unobserve(entry.target);
        }
      });
    });
    
    const elements = this.elRef.nativeElement.querySelectorAll('.text-container > div');
    elements.forEach((element: HTMLElement) => {
      observer.observe(element);
    });
  }
}

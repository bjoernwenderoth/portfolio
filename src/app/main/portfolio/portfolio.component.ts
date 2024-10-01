import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}

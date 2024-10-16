import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})



export class ImprintComponent implements OnInit {

  ngOnInit(): void {
    // Scrollt die Seite beim Laden der Komponente nach oben
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

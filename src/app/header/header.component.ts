import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLanguage: string;

  constructor(private translate: TranslateService){
    this.currentLanguage = this.translate.defaultLang || 'de';
    this.translate.onLangChange.subscribe(lang => {
      this.currentLanguage = lang.lang; 
    });
  }

  switchLanguage() {
    if (this.translate.currentLang == 'de') {
      this.translate.use('en')
    } else {
      this.translate.use('de')
    }
  }
}

// Burgermenu animation and menu toggle logic
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.hamburger') as HTMLElement | null;
  const menu = document.querySelector(".menu") as HTMLElement | null;
  const menuLinks = document.querySelectorAll(".menu a"); // Alle Links im Menü erfassen
  let menuOpen = false;

  if (hamburger && menu) {
    // Toggle Menu bei Klick auf das Burger-Icon
    hamburger.addEventListener("click", function () {
      if (menuOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Menü schließen, wenn man außerhalb des Menüs klickt
    document.addEventListener("click", function (event) {
      const target = event.target as Node | null;
      if (menuOpen && target && !menu.contains(target) && !hamburger.contains(target)) {
        closeMenu();
      }
    });

    // Event-Listener für alle Links im Menü
    menuLinks.forEach(link => {
      link.addEventListener("click", function () {
        closeMenu(); // Menü schließen, wenn ein Link angeklickt wird
      });
    });
  } else {
    console.error("Hamburger or menu element not found!");
  }

  // Funktion zum Öffnen des Menüs
  function openMenu() {
    if (menu && hamburger) {
      menu.style.display = "block";
      hamburger.classList.add('clicked');  // Icon ändert sich
      document.body.style.overflow = "hidden"; // Scrollen verhindern
      menuOpen = true;
    }
  }

  // Funktion zum Schließen des Menüs
  function closeMenu() {
    if (menu && hamburger) {
      menu.style.display = "none";
      hamburger.classList.remove('clicked');  // Icon zurücksetzen
      document.body.style.overflow = "auto"; // Scrollen wieder erlauben
      menuOpen = false;
    }
  }
});

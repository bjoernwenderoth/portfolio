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
    let newLanguage = this.currentLanguage === 'de' ? 'en' : 'de';
    this.translate.use(newLanguage);
  }
}

// -------------------- ANIMATION BURGER MENU -------------------- //

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.hamburger') as HTMLElement | null;
  const menu = document.querySelector(".menu") as HTMLElement | null;
  const menuLinks = document.querySelectorAll(".menu a");
  let menuOpen = false;

  if (hamburger && menu) {
    hamburger.addEventListener("click", function () {
      if (menuOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.addEventListener("click", function (event) {
      const target = event.target as Node | null;
      if (menuOpen && target && !menu.contains(target) && !hamburger.contains(target)) {
        closeMenu();
      }
    });

    menuLinks.forEach(link => {
      link.addEventListener("click", function () {
        closeMenu();
      });
    });
  } else {
    console.error("Hamburger or menu element not found!");
  }

  function openMenu() {
    if (menu && hamburger) {
      menu.style.display = "block";
      hamburger.classList.add('clicked');  
      document.body.style.overflow = "hidden"; 
      menuOpen = true;
    }
  }

  function closeMenu() {
    if (menu && hamburger) {
      menu.style.display = "none";
      hamburger.classList.remove('clicked');
      document.body.style.overflow = "auto";
      menuOpen = false;
    }
  }
});

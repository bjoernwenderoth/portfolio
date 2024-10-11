import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  

}
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu") as HTMLElement | null;
  const menu = document.querySelector(".menu") as HTMLElement | null;
  const menuLinks = document.querySelectorAll(".menu a"); // Alle Links im Menü erfassen
  let menuOpen = false;

  if (burgerMenu && menu) {
    // Toggle Menu bei Klick auf das Burger-Icon
    burgerMenu.addEventListener("click", function () {
      if (menuOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Menü schließen, wenn man außerhalb des Menüs klickt
    document.addEventListener("click", function (event) {
      const target = event.target as Node | null;
      if (menuOpen && target && !menu.contains(target) && !burgerMenu.contains(target)) {
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
    console.error("Burger menu or menu element not found!");
  }

  // Funktion zum Öffnen des Menüs
  function openMenu() {
    if (menu) {
      menu.style.display = "block";
      document.body.style.overflow = "hidden"; // Scrollen verhindern
      menuOpen = true;
    }
  }

  // Funktion zum Schließen des Menüs
  function closeMenu() {
    if (menu) {
      menu.style.display = "none";
      document.body.style.overflow = "auto"; // Scrollen wieder erlauben
      menuOpen = false;
    }
  }
});



import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {

  showLoader = true;

  progress = 0;
  statusMessage = "Configuring Components...";

  icons = [
    'fa-solid fa-code',
    'fa-solid fa-laptop-code',
    'fa-solid fa-rocket',
    'fa-solid fa-microchip',
    'fa-solid fa-terminal'
  ];

  currentIcon = this.icons[0];
  iconIndex = 0;

  ngOnInit(): void {
    const hasVisited = sessionStorage.getItem('visited');

  if (hasVisited) {
    this.showLoader = false;
    return;
  }
  this.iconAnimation();
  this.startLoading();
  sessionStorage.setItem('visited', 'true');
  }

  iconAnimation() {
    setInterval(() => {
      this.iconIndex = (this.iconIndex + 1) % this.icons.length;
      this.currentIcon = this.icons[this.iconIndex];
    }, 700);
  }

  startLoading() {
    let interval = setInterval(() => {
      if (this.progress >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          this.showLoader = false;
        }, 1000);

      } else {
        this.progress++;
      }
    }, 50);
  }
}


import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

 
  private router = inject(Router);
  constructor(private route: Router) {}

  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  navigateAndScroll(route: string, section: string) {
  this.route.navigate([route]).then(() => {
    setTimeout(() => {
      this.scrollTo(section);
    }, 300);
  });
}

 scrollTo(section: any) {
    var element: any = document.getElementById(section);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}

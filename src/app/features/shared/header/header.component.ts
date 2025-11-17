import { Component, inject, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private modalService = inject(NgbModal);
  constructor(private route: Router, private sanitizer: DomSanitizer) {}
  
  navigateTo(path: any) {
    this.route.navigate([path]);
    
  }

  navigateAndScroll(route: string, section: string, modal: any) {
  modal.close();

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
  isDarkMode = false;

  ngOnInit() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    this.isDarkMode = true;
    document.body.classList.add('dark-theme');
  }
}

toggleTheme() {
  this.isDarkMode = !this.isDarkMode;
  if (this.isDarkMode) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
}


  openScrollableContent(longContent: TemplateRef<any>) {
    this.modalService.open(longContent, { scrollable: true });
  }
  
}

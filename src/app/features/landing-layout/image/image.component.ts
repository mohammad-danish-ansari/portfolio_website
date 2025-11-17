import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
    constructor(private route: Router) {}
navigateTo(path: any) {
    this.route.navigate([path]);
    
  }
}

// portfolio.component.ts
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  images = [
    "./assets/images/poert1.png",
    "./assets/images/port2.png",
    "./assets/images/port3.png",
    "./assets/images/poert1.png",
    "./assets/images/port2.png",
    "./assets/images/port3.png",
  ];

  showImageLayer: boolean = false;
  selectedImageUrl: string = '';

  constructor(private elementRef: ElementRef) {} 

  openImage(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
    this.showImageLayer = true;
  }

  closeImageLayer() {
    this.showImageLayer = false;
  }

  @HostListener('document:click', ['$event']) 
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) { 
      this.closeImageLayer(); 
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.startCarousel();
  }

  images = [
    '../../assets/images/banner/1.png',
    '../../assets/images/banner/2.png',
    '../../assets/images/banner/3.png'
  ];
  currentIndex = 0;
  interval: any;
  startCarousel() {
    this.interval = setInterval(() => {
      this.showNextImage();
    }, 3000); // Cambia la imagen cada 3 segundos (ajusta según sea necesario)
  }

  stopCarousel() {
    clearInterval(this.interval);
  }
  showNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  showPreviousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

}

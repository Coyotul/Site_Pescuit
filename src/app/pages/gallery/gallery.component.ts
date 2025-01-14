import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeGallery();
    }
  }

  private initializeGallery() {
    const images = document.querySelectorAll<HTMLImageElement>('.slider-image');
    const prevBtn = document.querySelector<HTMLButtonElement>('.prev-btn');
    const nextBtn = document.querySelector<HTMLButtonElement>('.next-btn');
    let currentIndex = 0;

    const showImage = (index: number) => {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    };

    prevBtn?.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      console.log(`Previous image: ${currentIndex}`);
      showImage(currentIndex);
    });

    nextBtn?.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      console.log(`Next image: ${currentIndex}`);
      showImage(currentIndex);
    });

    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }, 5000);
  }
}

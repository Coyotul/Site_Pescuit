import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader'; // Folosind loaderul pentru API-ul Google Maps

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  map!: google.maps.Map;  // Folosirea operatorului de asigurare a inițializării

  ngOnInit(): void {
    const loader = new Loader({
      apiKey: 'AIzaSyBvb2jeZTISnhpqzoEzIOz0MR3fUsq0lJY',
      version: 'weekly',
      libraries: ['places']
    });

    loader.load().then(() => {
      this.initMap();
    });
  }

  initMap(): void {
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: 45.9432, lng: 24.9668 },
      zoom: 8
    });
  }
}

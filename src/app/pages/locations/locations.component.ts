import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Loader } from '@googlemaps/js-api-loader'; // Folosind loaderul pentru API-ul Google Maps
import { LocationsService } from '../../locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  map!: google.maps.Map;
  locations: any[] = [];

  constructor(
    private locationsService: LocationsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Creează o instanță a loaderului API Google Maps
      const loader = new Loader({
        apiKey: 'AIzaSyBvb2jeZTISnhpqzoEzIOz0MR3fUsq0lJY', // Înlocuiește cu cheia ta API
        version: 'weekly',
        libraries: ['places']
      });

      loader.load().then(() => {
        this.initMap();
        this.loadLocations();
      }).catch((error) => {
        console.error("Eroare la încărcarea API-ului Google Maps:", error);
      });
    }
  }

  initMap(): void {
    const mapElement = document.getElementById('map') as HTMLElement;
    if (mapElement) {
      this.map = new google.maps.Map(mapElement, {
        center: { lat: 45.9432, lng: 24.9668 },
        zoom: 8
      });
    } else {
      console.error("Elementul 'map' nu a fost găsit.");
    }
  }

  loadLocations(): void {
    const lat = 45.9432;
    const lng = 24.9668;
    const radius = 50000;
    this.locationsService.getLocations(lat, lng, radius).subscribe(
      (data) => {
        this.locations = data;
        this.addMarkers();
      },
      (error) => {
        console.error('Error fetching locations:', error);
      }
    );
  }

  addMarkers(): void {
    this.locations.forEach(location => {
      new google.maps.Marker({
        position: { lat: location.latitude, lng: location.longitude },
        map: this.map,
        title: location.name
      });
    });
  }
}
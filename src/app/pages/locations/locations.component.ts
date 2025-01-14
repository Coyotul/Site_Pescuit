import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: any[] = [];

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.locationsService.getLocations().subscribe(
      (data) => {
        this.locations = data;
        console.log(this.locations); // Debugging
      },
      (error) => {
        console.error('Error fetching locations:', error);
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private apiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getLocations(lat: number, lng: number, radius: number): Observable<any> {
    const url = `${this.apiUrl}?lat=${lat}&lng=${lng}&radius=${radius}`;
    return this.http.get<any>(url);
  }
}
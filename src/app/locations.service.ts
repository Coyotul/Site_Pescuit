import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private apiUrl = 'https://mockapi.io/endpoint/locations'; // Înlocuiește cu URL-ul API-ului tău

  constructor(private http: HttpClient) { }

  getLocations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

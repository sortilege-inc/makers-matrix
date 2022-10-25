import { Injectable } from '@angular/core';
import { Integrant } from './integrant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3001/player/all');
  }

  getMaterials(): Observable<Integrant[]> {
    return this.http.get<Integrant[]>('./assets/data/material.json');
  }

  getIngredients(): Observable<Integrant[]> {
    return this.http.get<Integrant[]>('./assets/data/ingredient.json');
  }

  getCatalysts(): Observable<Integrant[]> {
    return this.http.get<Integrant[]>('./assets/data/catalyst.json');
  }

  getStabilizer(): Observable<Integrant[]> {
    return this.http.get<Integrant[]>('./assets/data/stabilizer.json');
  }

  getPowerSource(): Observable<Integrant[]> {
    return this.http.get<Integrant[]>('./assets/data/powerSource.json');
  }
}

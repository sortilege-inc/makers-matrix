import { Injectable } from '@angular/core';
import { MatrixMaterial } from './interfaces/matrix-material';
import { MatrixIngredient } from './interfaces/matrix-ingredient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getMaterials(): Observable<MatrixMaterial[]> {
    return this.http.get<MatrixMaterial[]>('./assets/data/material.json');
  }

  getIngredients(): Observable<MatrixIngredient[]> {
    return this.http.get<MatrixIngredient[]>('./assets/data/ingredient.json');
  }

  getPlayers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3001/player/all');
  }

}

import { Injectable } from '@angular/core';
import { MatrixMaterial } from './interfaces/matrix-material';
import { MatrixIngredient } from './interfaces/matrix-ingredient';
import { MatrixCatalyst } from './interfaces/matrix-catalyst';
import { MatrixStabilizer } from './interfaces/matrix-stabilizer';
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

  getCatalysts(): Observable<MatrixCatalyst[]> {
    return this.http.get<MatrixCatalyst[]>('./assets/data/catalyst.json');
  }

  getStabilizer(): Observable<MatrixStabilizer[]> {
    return this.http.get<MatrixStabilizer[]>('./assets/data/stabilizer.json');
  }

}

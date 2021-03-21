import { Injectable } from '@angular/core';
import { MatrixMaterial } from './classes/matrix-material';
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

}

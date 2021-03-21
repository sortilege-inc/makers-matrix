import { Component, OnInit } from '@angular/core';
import { MainService } from './main-service.service';
import { MatrixMaterial } from './classes/matrix-material';
import { MatrixIngredient } from './classes/matrix-ingredient';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public avail_material: MatrixMaterial[] = [];
  public avail_ingredient: MatrixIngredient[] = [];

  constructor(
    private service: MainService
  ) { }

  ngOnInit(): void {
    this.service.getMaterials().subscribe(data => {
      this.avail_material = data;
    });
    this.service.getIngredients().subscribe(data => {
      this.avail_ingredient = data;
    });
  }

}

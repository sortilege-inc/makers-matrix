import { Component, OnInit } from '@angular/core';
import { MainService } from './main-service.service';
import { MatrixMaterial } from './classes/matrix-material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public avail_material: MatrixMaterial[] = [];

  constructor(
    private service: MainService
  ) { }

  ngOnInit(): void {
    this.service.getMaterials().subscribe(data => {
      this.avail_material = data;
    })
  }

}

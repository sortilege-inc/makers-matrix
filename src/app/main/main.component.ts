import { Component, OnInit } from '@angular/core';
import { MainService } from './main-service.service';
import { MatrixMaterial } from './interfaces/matrix-material';
import { MatrixIngredient } from './interfaces/matrix-ingredient';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  players = [];
  selected_player;

  avail_material: MatrixMaterial[] = [];
  avail_ingredient: MatrixIngredient[] = [];

  selected_material?: MatrixMaterial;
  selected_ingredient?: MatrixIngredient;

  ingredient_challenge?: number;

  catalyst_needed: boolean = false;

  constructor(
    private service: MainService
  ) {}

  ngOnInit(): void {
    this.service.getMaterials().subscribe(data => {
      this.avail_material = data;
    });
    this.service.getIngredients().subscribe(data => {
      this.avail_ingredient = data;
    });
    this.service.getPlayers().subscribe(data => {
      this.players = data;
    });
  }

  materialSelect(material: MatrixMaterial): void {
    this.selected_material = material;
  }

  ingredientSelect(ingredient: MatrixIngredient): void {
    this.selected_ingredient = ingredient;
  }

  playerSelect(player):void {
    this.selected_player = player;
  }

  ingredientChallengeCheck() {
    if (this.ingredient_challenge && this.selected_ingredient &&
      this.ingredient_challenge < this.selected_ingredient.level
    ) {
      this.catalyst_needed = true;
    } else {
      this.catalyst_needed = false;
    }

  }

}

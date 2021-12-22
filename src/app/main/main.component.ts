import { Component, OnInit } from '@angular/core';
import { MainService } from './main-service.service';
import { MatrixMaterial } from './interfaces/matrix-material';
import { MatrixIngredient } from './interfaces/matrix-ingredient';
import { MatrixCatalyst } from './interfaces/matrix-catalyst';
import { MatrixStabilizer } from './interfaces/matrix-stabilizer';

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
  avail_catalyst: MatrixCatalyst[] = [];
  avail_stabilizer: MatrixStabilizer[] = [];

  selected_material?: MatrixMaterial;
  selected_ingredient?: MatrixIngredient;
  selected_catalyst?: MatrixCatalyst;
  selected_stabilizer?: MatrixStabilizer;

  set_item_level?: number;
  set_depletion?: number;

  venture?: number;
  material_challenge?: number;
  ingredient_challenge?: number;
  catalyst_challenge?: number;
  stabilizer_challenge?: number;

  material_needed: boolean = false;
  ingredient_needed: boolean = false;
  catalyst_needed: boolean = false;
  stabilizer_needed: boolean = false;
  power_source_needed: boolean = false;
  mishap: boolean = false;

  constructor(
    private service: MainService
  ) {}

  ngOnInit(): void {
    this.service.getCatalysts().subscribe(data => {
      this.avail_catalyst = data;
    });
    this.service.getStabilizer().subscribe(data => {
      this.avail_stabilizer = data;
    });
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

  catalystSelect(catalyst: MatrixCatalyst): void {
    this.selected_catalyst = catalyst;
  }

  stabilizerSelect(stabilizer: MatrixStabilizer): void {
    this.selected_stabilizer = stabilizer;
  }

  setChallenges() {
    this.material_needed = !!(this.set_item_level && this.set_depletion);
  }

  materialChallengeCheck() {
    if (this.material_challenge && this.venture && this.selected_material &&
      this.material_challenge + this.venture < this.selected_material.level
    ) {
      this.catalyst_needed = true;
    } else {
      this.ingredient_needed = true;
    }
  }

  ingredientChallengeCheck() {
    this.catalyst_needed = this.ingredient_challenge && this.venture && this.selected_ingredient &&
      (this.ingredient_challenge + this.venture) < this.selected_ingredient.level;
  }

  catalystChallengeCheck() {
    this.stabilizer_needed = this.catalyst_challenge && this.venture && this.selected_catalyst &&
      this.catalyst_challenge + this.venture < this.selected_catalyst.level;
  }

  stabilizerChallengeCheck() {
    this.mishap = this.stabilizer_challenge && this.venture && this.selected_stabilizer &&
      this.stabilizer_challenge + this.venture < this.selected_stabilizer.level;
  }

}

export class SetDepletionComponent {
  set_depletion = '2';
}



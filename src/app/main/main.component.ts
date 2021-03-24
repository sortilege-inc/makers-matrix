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
    this.set_item_level = this.set_item_level;
    this.set_depletion = this.set_depletion;
    if (this.set_item_level && this.set_depletion
    ) {
      this.material_needed = true;
    } else {
      this.material_needed = false;
    }
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
    if (this.ingredient_challenge && this.venture && this.selected_ingredient &&
      (this.ingredient_challenge + this.venture) < this.selected_ingredient.level
    ) {
      this.catalyst_needed = true;
    } else {
      this.catalyst_needed = false;
    }
  }

  catalystChallengeCheck() {
    if (this.catalyst_challenge && this.venture && this.selected_catalyst &&
      this.catalyst_challenge + this.venture < this.selected_catalyst.level
    ) {
      this.stabilizer_needed = true;
    } else {
      this.stabilizer_needed = false;
    }
  }

  stabilizerChallengeCheck() {
    if (this.stabilizer_challenge && this.venture && this.selected_stabilizer &&
      this.stabilizer_challenge + this.venture < this.selected_stabilizer.level
    ) {
      this.mishap = true;
    } else {
      this.mishap = false;
    }
  }

}

export class SetDepletionComponent {
  set_depletion = '2';
}



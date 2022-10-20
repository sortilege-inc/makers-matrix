import { Component, OnInit } from '@angular/core';
import { MainService } from './main-service.service';
import { Integrant } from './integrant';
import { Challenge } from './challenge';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  players = [];
  selected_player;

  avail_material: Integrant[] = [];
  avail_ingredient: Integrant[] = [];
  avail_catalyst: Integrant[] = [];
  avail_stabilizer: Integrant[] = [];
  avail_powerSource: Integrant[] = [];

  challengeLevel = 1;

  selected_material?: Integrant;
  selected_ingredient?: Integrant;
  selected_catalyst?: Integrant;
  selected_stabilizer?: Integrant;

  set_item_level?: number;
  set_depletion?: number;

  venture?: number;
  material_challenge?: number;
  ingredient_challenge?: number;
  catalyst_challenge?: number;
  stabilizer_challenge?: number;

  material_needed = false;
  ingredient_needed = false;
  catalyst_needed = false;
  stabilizer_needed = false;
  power_source_needed = false;
  mishap = false;

  challenges?: Challenge[] = [];

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
    this.service.getPowerSource().subscribe(data => {
      this.avail_powerSource = data;
    });
    this.service.getPlayers().subscribe(data => {
      this.players = data;
    });
  }

  handleMake() {
    if (this.set_item_level && this.set_depletion) {
      this.challenges.push({
        integrantList: this.avail_ingredient,
        integrantType: 'Ingredient',
        initVenture: 1
      });
    }
  }

  handleCheck(checkResult: boolean) {
    if (checkResult) {
      this.challengeLevel++;
      if (this.challengeLevel<this.set_item_level) {
        this.challenges.push({
          integrantList: this.avail_ingredient,
          integrantType: 'Ingredient',
          initVenture: 1
        });
      }
    }
  }

  playerSelect(player): void {
    this.selected_player = player;
  }

  /*
  materialSelect(material: Integrant): void {
    this.selected_material = material;
  }

  ingredientSelect(ingredient: Integrant): void {
    this.selected_ingredient = ingredient;
  }


  catalystSelect(catalyst: Integrant): void {
    this.selected_catalyst = catalyst;
  }

  stabilizerSelect(stabilizer: Integrant): void {
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
    this.catalyst_needed = !!(this.ingredient_challenge && this.venture && this.selected_ingredient &&
      this.ingredient_challenge + this.venture < this.selected_ingredient.level);
  }

  catalystChallengeCheck() {
    this.stabilizer_needed = this.catalyst_challenge && this.venture && this.selected_catalyst &&
      this.catalyst_challenge + this.venture < this.selected_catalyst.level;
  }

  stabilizerChallengeCheck() {
    this.mishap = this.stabilizer_challenge && this.venture && this.selected_stabilizer &&
      this.stabilizer_challenge + this.venture < this.selected_stabilizer.level;
  }
*/

}

export class SetDepletionComponent {
  set_depletion = '2';
}



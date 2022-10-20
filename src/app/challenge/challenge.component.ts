import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Challenge } from '../main/challenge';
import { Integrant } from '../main/integrant';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {

  @Input()
  challenge: Challenge;

  @Output()
  checkResult = new EventEmitter<boolean>();

  integrantList: Integrant[];
  integrantType: string;
  venture: number;
  selectedIntegrant: Integrant;
  integrantChallenge: number;

  constructor() { }

  ngOnInit(): void {
    this.integrantList = this.challenge.integrantList;
    this.integrantType = this.challenge.integrantType;
    this.venture = this.challenge.initVenture;
  }

  integrantSelect(integrant: Integrant): void {
    this.selectedIntegrant = integrant;
  }

  integrantChallengeCheck() {
    this.checkResult.emit(this.integrantChallenge && this.venture && this.selectedIntegrant &&
      this.integrantChallenge + this.venture >= this.selectedIntegrant.level);
  }

  rollChallenge() {
    this.integrantChallenge = Math.floor(Math.random() * 9);
  }
}

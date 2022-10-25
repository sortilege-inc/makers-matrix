import { Integrant } from './integrant';

export interface Challenge {
  integrantList: Integrant[];
  integrantType: string;
  initVenture: number;
}

export interface PlayerReq {
  rating: number;
  count: number;
}

export interface SBCOption {
  label: string;
  players: PlayerReq[];
}

export interface SBCRecipe {
  target: number;
  options: SBCOption[];
}
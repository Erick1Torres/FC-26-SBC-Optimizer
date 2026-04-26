import type { SBCRecipe } from '../types';

export const sbcRecipes: SBCRecipe[] = [
  {
    target: 85,
    options: [
      {
        label: "Opción 1: Equilibrada",
        players: [
          { rating: 87, count: 1 },
          { rating: 85, count: 2 },
          { rating: 84, count: 6 },
          { rating: 83, count: 2 }
        ]
      },
      {
        label: "Opción 2: Sin 87s",
        players: [
          { rating: 86, count: 2 },
          { rating: 85, count: 4 },
          { rating: 84, count: 5 }
        ]
      },
      {
        label: "Opción 3: Económica",
        players: [
          { rating: 88, count: 1 },
          { rating: 84, count: 10 }
        ]
      }
    ]
  },
  {
    target: 87,
    options: [
      {
        label: "Opcion 1:",
        players: [
          { rating: 88, count: 3 },
          { rating: 87, count: 4 },
          { rating: 84, count: 4 }
        ]
      },
      {
        label: "Opcion 2:",
        players: [
          { rating: 89, count: 1 },
          { rating: 87, count: 4 },
          { rating: 86, count: 6 }
        ]
      },
      {
        label: "Opcion 3:",
        players: [
          { rating: 88, count: 4 },
          { rating: 87, count: 1 },
          { rating: 86, count: 1 },
          { rating: 85, count: 4 },
          { rating: 84, count: 1 }
        ]
      }
    ]
  },
  {
    target: 88,
    options: [
      {
        label: "Opcion 1:",
        players: [
          { rating: 89, count: 1 },
          { rating: 86, count: 6 },
          { rating: 87, count: 3 },
          { rating: 86, count: 1 }
        ]
      },
      {
        label: "Opcion 2:",
        players: [
          { rating: 89, count: 3 },
          { rating: 88, count: 4 },
          { rating: 85, count: 4 }
        ]
      },
      {
        label: "Opcion 3:",
        players: [
          { rating: 89, count: 3 },
          { rating: 88, count: 2 },
          { rating: 87, count: 3 },
          { rating: 86, count: 3 }
        ]
      }
    ]
  },
  {
    target: 89,
    options: [
      {
        label: "Opcion 1:",
        players: [
          { rating: 90, count: 1 },
          { rating: 89, count: 6 },
          { rating: 88, count: 3 },
          { rating: 87, count: 1 }
        ]
      },
      {
        label: "Opcion 2:",
        players: [
          { rating: 90, count: 2 },
          { rating: 89, count: 5 },
          { rating: 87, count: 4 }
        ]
      },
    ]
  },
  {
    target: 90,
    options: [
      {
        label: "Opcion 1:",
        players: [
          { rating: 91, count: 3 },
          { rating: 90, count: 2 },
          { rating: 89, count: 3 },
          { rating: 88, count: 2 }
        ]
      },
      {
        label: "Opcion 2:",
        players: [
          { rating: 91, count: 3 },
          { rating: 90, count: 3 },
          { rating: 89, count: 1 },
          { rating: 88, count: 3 },
          { rating: 87, count: 1 }
        ]
      },
      {
        label: "Opcion 3:",
        players: [
          { rating: 91, count: 2 },
          { rating: 90, count: 6 },
          { rating: 88, count: 1 },
          { rating: 86, count: 1 },
          { rating: 85, count: 1 }
        ]
      }
    ]
  },
];
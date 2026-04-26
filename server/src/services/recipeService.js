const sbcRecipes = [
  { target: 85, options: [
      { label: "Opción 1:", players: [{ rating: 86, count: 2 }, { rating: 84, count: 9 }] },
      { label: "Opción 2:", players: [{ rating: 87, count: 1 }, { rating: 85, count: 2 }, { rating: 84, count: 8 }] },
      { label: "Opción 3:", players: [{ rating: 88, count: 1 }, { rating: 84, count: 10 }] }
  ]},
  { target: 86, options: [
      { label: "Opción 1:", players: [{ rating: 87, count: 2 }, { rating: 85, count: 9 }] },
      { label: "Opción 2:", players: [{ rating: 88, count: 1 }, { rating: 86, count: 2 }, { rating: 85, count: 8 }] },
      { label: "Opción 3:", players: [{ rating: 89, count: 1 }, { rating: 85, count: 10 }] }
  ]},
  { target: 87, options: [
      { label: "Opción 1", players: [{ rating: 88, count: 3 }, { rating: 86, count: 8 }] },
      { label: "Opción 2", players: [{ rating: 89, count: 1 }, { rating: 88, count: 1 }, { rating: 86, count: 9 }] },
      { label: "Opción 3", players: [{ rating: 90, count: 1 }, { rating: 86, count: 10 }] }
  ]},
  { target: 88, options: [
      { label: "Opción 1", players: [{ rating: 89, count: 3 }, { rating: 87, count: 8 }] },
      { label: "Opción 2", players: [{ rating: 90, count: 1 }, { rating: 89, count: 1 }, { rating: 87, count: 9 }] },
      { label: "Opción 3", players: [{ rating: 91, count: 1 }, { rating: 87, count: 10 }] }
  ]},
  { target: 89, options: [
      { label: "Opción 1", players: [{ rating: 90, count: 4 }, { rating: 88, count: 7 }] },
      { label: "Opción 2", players: [{ rating: 91, count: 2 }, { rating: 88, count: 9 }] },
      { label: "Opción 3", players: [{ rating: 92, count: 1 }, { rating: 88, count: 10 }] }
  ]},
  { target: 90, options: [
      { label: "Opción 1", players: [{ rating: 91, count: 4 }, { rating: 89, count: 7 }] },
      { label: "Opción 2", players: [{ rating: 92, count: 2 }, { rating: 89, count: 9 }] },
      { label: "Opción 3", players: [{ rating: 93, count: 1 }, { rating: 89, count: 10 }] }
  ]}
];

const getRecipeByTarget = (target) => {
  return sbcRecipes.find(r => r.target === parseInt(target));
};

module.exports = { getRecipeByTarget };
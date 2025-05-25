if (!elements.perfect_coolant) {
  elements.perfect_coolant = {
    color: "#00e0ff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1000,
    temperature: -100,
    tempHigh: Infinity,
    tempLow: -273.15,
    conduct: 1,
    hardness: 1,
    noHeatTransfer: true,
    hidden: false,
    desc: "The ultimate coolant. Always -100°C, never evaporates or absorbs heat."
  };
}


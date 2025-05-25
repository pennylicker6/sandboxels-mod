elements.perfect_coolant = {
  color: "#00e0ff",
  behavior: [
    "XX|XX|XX",
    "XX|CH:perfect_coolant|XX",
    "XX|XX|XX",
    function(pixel) {
      pixel.temp = -100;
    }
  ],
  category: "liquids",
  state: "liquid",
  density: 1000,
  temperature: -100,
  tempHigh: Infinity,
  tempLow: -273.15,
  conduct: 1,
  noHeatTransfer: true,
  tool: "fill",
  hidden: false,
  desc: "The ultimate coolant. Always -100°C, never evaporates or absorbs heat."
};

/**
 * Formats a Pokémon name by capitalizing the first letter
 */
export const formatPokemonName = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

/**
 * Formats Pokémon height from decimeters to meters
 */
export const formatHeight = (height: number): string => {
  return `${(height / 10).toFixed(1)} m`;
};

/**
 * Formats Pokémon weight from hectograms to kilograms
 */
export const formatWeight = (weight: number): string => {
  return `${(weight / 10).toFixed(1)} kg`;
};

/**
 * Formats stat name to display-friendly format
 */
export const formatStatName = (statName: string): string => {
  const statMap: Record<string, string> = {
    hp: "HP",
    attack: "Attack",
    defense: "Defense",
    "special-attack": "Sp. Attack",
    "special-defense": "Sp. Defense",
    speed: "Speed",
  };
  return statMap[statName.toLowerCase()] || statName;
};

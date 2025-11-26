/**
 * Extracts Pokémon ID from URL
 */
export const extractPokemonId = (url: string): number => {
	const matches = url.match(/\/(\d+)\/$/);

	return matches ? parseInt(matches[1], 10) : 0;
};

/**
 * Gets Pokémon sprite URL from ID
 */
export const getPokemonSpriteUrl = (id: number): string => {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

import { PokemonDetailResponse, PokemonListResponse } from "@/types";

const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonList = async (
	page: number,
	limit: number = 20
): Promise<PokemonListResponse> => {
	const offset = (page - 1) * limit;

	const response = await fetch(
		`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
	);

	if (!response.ok) {
		throw new Error("Failed to fetch Pokémon list");
	}

	return response.json();
};

export const fetchPokemonDetail = async (
	id: number
): Promise<PokemonDetailResponse> => {
	const response = await fetch(`${BASE_URL}/pokemon/${id}`);

	if (!response.ok) {
		if (response.status === 404) {
			throw new Error("Pokémon not found");
		}

		throw new Error("Failed to fetch Pokémon details");
	}

	return response.json();
};

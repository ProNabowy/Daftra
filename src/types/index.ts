export interface PokemonCardProps {
	name: string;
	id: number;
	sprite: string;
	onClick?: () => void;
}

export interface PokemonListItem {
	name: string;
	url: string;
}

export interface PokemonListResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonListItem[];
}

export interface ErrorMessageProps {
	message?: string;
	onRetry?: () => void;
}

export interface PokemonType {
	slot: number;
	type: {
		name: string;
		url: string;
	};
}

export interface PokemonStat {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url: string;
	};
}

export interface PokemonAbility {
	ability: {
		name: string;
		url: string;
	};
	is_hidden: boolean;
	slot: number;
}

export interface PokemonDetailResponse {
	id: number;
	name: string;
	height: number;
	weight: number;
	base_experience: number;
	sprites: {
		front_default: string;
	};
	types: PokemonType[];
	stats: PokemonStat[];
	abilities: PokemonAbility[];
}

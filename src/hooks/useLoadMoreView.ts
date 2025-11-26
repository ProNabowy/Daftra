import { fetchPokemonList } from "@/services/api";
import { PokemonListItem } from "@/types";
import { extractPokemonId, getPokemonSpriteUrl } from "@/utils/pokemon";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const POKEMON_PER_PAGE = 20;

export interface PokemonWithDetails {
	name: string;
	id: number;
	sprite: string;
}

export default function useLoadMoreView() {
	const navigate = useNavigate();

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		isFetching,
		isError,
		error,
		refetch,
	} = useInfiniteQuery({
		queryKey: ["pokemon-list-infinite"],
		queryFn: ({ pageParam = 1 }) =>
			fetchPokemonList(pageParam, POKEMON_PER_PAGE),
		getNextPageParam: (lastPage, allPages) => {
			if (!lastPage.next) {
				return undefined;
			}
			return allPages.length + 1;
		},
		initialPageParam: 1,
	});

	const allPokemon: PokemonWithDetails[] =
		data?.pages
			.flatMap((page) => page.results)
			.reduce((acc: PokemonWithDetails[], pokemon: PokemonListItem) => {
				const id = extractPokemonId(pokemon.url);

				if (!acc.find((p) => p.id === id)) {
					acc.push({
						name: pokemon.name,
						id,
						sprite: getPokemonSpriteUrl(id),
					});
				}

				return acc;
			}, []) || [];

	const handleLoadMore = () => {
		if (hasNextPage && !isFetchingNextPage) fetchNextPage();
	};

	const handlePokemonClick = (id: number) => {
		navigate(`/pokemon/${id}`);
	};

	return {
		allPokemon,
		isLoading,
		isFetching,
		isError,
		error,
		refetch,
		handleLoadMore,
		handlePokemonClick,
		hasNextPage,
		isFetchingNextPage,
	};
}

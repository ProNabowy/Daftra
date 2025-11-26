import PaginationControls from "@/components/pokemon/PaginationControls";
import PokemonCard from "@/components/pokemon/PokemonCard";
import ErrorMessage from "@/components/ui/ErrorMessage";
import PokemonCardSkeleton from "@/components/ui/PokemonCardSkeleton";
import usePaginationView from "@/hooks/usePaginationView";
import { PokemonListItem } from "@/types";
import { extractPokemonId, getPokemonSpriteUrl } from "@/utils/pokemon";

const SKELETON_COUNT = 20;

function PaginationView() {
	const {
		currentPage,
		pokemonListData,
		isLoading,
		isFetching,
		isError,
		error,
		refetch,
		handlePageChange,
		handlePokemonClick,
		totalPages,
	} = usePaginationView();

	const showSkeletons = isLoading || isFetching;

	if (isError && !pokemonListData && !isFetching) {
		return (
			<div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-10 min-h-screen overflow-x-hidden">
				<h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10 px-2">
					Pokédex – Pagination View
				</h1>
				<ErrorMessage
					message={
						error instanceof Error
							? error.message
							: "Failed to load Pokémon. Please try again."
					}
					onRetry={() => refetch()}
				/>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-10 min-h-screen overflow-x-hidden">
			<h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10 px-2">
				Pokédex – Pagination View
			</h1>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
				{showSkeletons
					? Array.from({ length: SKELETON_COUNT }).map((_, index) => (
							<PokemonCardSkeleton key={`skeleton-${index}`} />
						))
					: pokemonListData && !isError
						? pokemonListData.results.map((pokemon: PokemonListItem) => {
								const id = extractPokemonId(pokemon.url);

								const sprite = getPokemonSpriteUrl(id);

								return (
									<PokemonCard
										key={pokemon.name}
										name={pokemon.name}
										id={id}
										sprite={sprite}
										onClick={() => handlePokemonClick(id)}
									/>
								);
							})
						: null}
			</div>

			{totalPages > 0 && (
				<PaginationControls
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
					isLoading={isFetching}
				/>
			)}

			{isError && pokemonListData && !isFetching && (
				<div className="mt-4">
					<ErrorMessage
						message={
							error instanceof Error
								? error.message
								: "Failed to load Pokémon. Please try again."
						}
						onRetry={() => refetch()}
					/>
				</div>
			)}
		</div>
	);
}

export default PaginationView;

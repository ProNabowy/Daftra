import LoadMoreButton from "@/components/pokemon/LoadMoreButton";
import PokemonCard from "@/components/pokemon/PokemonCard";
import ErrorMessage from "@/components/ui/ErrorMessage";
import PokemonCardSkeleton from "@/components/ui/PokemonCardSkeleton";
import useLoadMoreView from "@/hooks/useLoadMoreView";

const SKELETON_COUNT = 20;

function LoadMoreView() {
	const {
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
	} = useLoadMoreView();

	const showInitialSkeletons =
		(isLoading || isFetching) && allPokemon.length === 0;

	if (isError && allPokemon.length === 0 && !isLoading && !isFetching) {
		return (
			<div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-10 min-h-screen overflow-x-hidden">
				<h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10 px-2">
					Pokédex – Load More View
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
				Pokédex – Load More View
			</h1>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
				{showInitialSkeletons
					? Array.from({ length: SKELETON_COUNT }).map((_, index) => (
							<PokemonCardSkeleton key={`skeleton-${index}`} />
						))
					: allPokemon.length > 0 && !isError
						? allPokemon.map((pokemon) => (
								<PokemonCard
									key={`${pokemon.id}-${pokemon.name}`}
									name={pokemon.name}
									id={pokemon.id}
									sprite={pokemon.sprite}
									onClick={() => handlePokemonClick(pokemon.id)}
								/>
							))
						: null}
			</div>

			{isFetchingNextPage && allPokemon.length > 0 && (
				<div className="flex justify-center mt-4 mb-4">
					<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
				</div>
			)}

			{!showInitialSkeletons && (
				<LoadMoreButton
					onClick={handleLoadMore}
					isLoading={isFetchingNextPage}
					hasMore={hasNextPage ?? false}
				/>
			)}

			{isError && allPokemon.length > 0 && !isLoading && !isFetching && (
				<div className="mt-4">
					<ErrorMessage
						message={
							error instanceof Error
								? error.message
								: "Failed to load more Pokémon. Please try again."
						}
						onRetry={() => refetch()}
					/>
				</div>
			)}
		</div>
	);
}

export default LoadMoreView;

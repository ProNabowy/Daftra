import PokemonDetailAbilities from "@/components/pokemon/PokemonDetailAbilities";
import PokemonDetailExperience from "@/components/pokemon/PokemonDetailExperience";
import PokemonDetailHeader from "@/components/pokemon/PokemonDetailHeader";
import PokemonDetailInfo from "@/components/pokemon/PokemonDetailInfo";
import PokemonDetailSprite from "@/components/pokemon/PokemonDetailSprite";
import PokemonDetailStats from "@/components/pokemon/PokemonDetailStats";
import PokemonDetailTypes from "@/components/pokemon/PokemonDetailTypes";
import BackButton from "@/components/ui/BackButton";
import ErrorMessage from "@/components/ui/ErrorMessage";
import PokemonDetailSkeleton from "@/components/ui/PokemonDetailSkeleton";
import usePokemonDetail from "@/hooks/usePokemonDetail";

function PokemonDetail() {
	const {
		pokemon,
		isLoading,
		isFetching,
		isError,
		error,
		refetch,
		handleBack,
	} = usePokemonDetail();

	if (isLoading || isFetching) {
		return <PokemonDetailSkeleton />;
	}

	if (isError || (!pokemon && !isFetching)) {
		return (
			<div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-10 min-h-screen overflow-x-hidden">
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

	if (!pokemon) {
		return null;
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-[#faf4ff] to-[#fbe7f3] py-4 sm:py-6 md:py-8 px-3 sm:px-4 overflow-x-hidden">
			<div className="container mx-auto max-w-4xl">
				<BackButton onClick={handleBack} />

				<div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
					<PokemonDetailHeader name={pokemon.name} id={pokemon.id} />

					<div className="p-4 sm:p-6 md:p-8">
						<div className="md:hidden space-y-4 sm:space-y-6">
							<div className="flex flex-col items-center">
								<PokemonDetailSprite
									sprite={pokemon.sprites.front_default}
									name={pokemon.name}
								/>
								<PokemonDetailTypes types={pokemon.types} />
							</div>

							<PokemonDetailInfo
								height={pokemon.height}
								weight={pokemon.weight}
							/>

							<PokemonDetailStats stats={pokemon.stats} />

							<PokemonDetailAbilities abilities={pokemon.abilities} />

							<PokemonDetailExperience
								baseExperience={pokemon.base_experience}
							/>
						</div>

						<div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
							<div className="space-y-6">
								<div className="flex flex-col items-center">
									<PokemonDetailSprite
										sprite={pokemon.sprites.front_default}
										name={pokemon.name}
									/>
									<PokemonDetailTypes types={pokemon.types} />
								</div>

								<PokemonDetailInfo
									height={pokemon.height}
									weight={pokemon.weight}
								/>
							</div>

							<div className="space-y-6">
								<PokemonDetailStats stats={pokemon.stats} />

								<PokemonDetailAbilities abilities={pokemon.abilities} />

								<PokemonDetailExperience
									baseExperience={pokemon.base_experience}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PokemonDetail;

import { PokemonAbility } from "@/types";
import { formatPokemonName } from "@/utils/formatters";

interface PokemonDetailAbilitiesProps {
	abilities: PokemonAbility[];
}

function PokemonDetailAbilities({ abilities }: PokemonDetailAbilitiesProps) {
	const primaryAbilities = abilities.filter((a) => !a.is_hidden);

	const hiddenAbilities = abilities.filter((a) => a.is_hidden);

	return (
		<div>
			<h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
				Abilities
			</h2>
			<div className="space-y-1.5 sm:space-y-2">
				{primaryAbilities.map((ability) => (
					<div
						key={ability.ability.name}
						className="text-sm text-gray-700 bg-[#f8f8f8] font-bold w-fit px-3 rounded-full"
					>
						{formatPokemonName(ability.ability.name)}
					</div>
				))}
				{hiddenAbilities.map((ability) => (
					<div
						key={ability.ability.name}
						className="text-sm sm:text-base text-gray-700 "
					>
						<span className="bg-[#f8f8f8] font-bold w-fit px-3 rounded-full">
							{formatPokemonName(ability.ability.name)}
						</span>{" "}
						<span className="text-gray-500 text-xs sm:text-sm">(Hidden)</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default PokemonDetailAbilities;

import { PokemonType } from "@/types";
import TypeBadge from "../TypeBadge";

interface PokemonDetailTypesProps {
	types: PokemonType[];
}

function PokemonDetailTypes({ types }: PokemonDetailTypesProps) {
	const sortedTypes = [...types].sort((a, b) => a.slot - b.slot);

	return (
		<div className="flex gap-1.5 sm:gap-2 flex-wrap justify-center">
			{sortedTypes.map((typeInfo) => (
				<TypeBadge key={typeInfo.slot} typeName={typeInfo.type.name} />
			))}
		</div>
	);
}

export default PokemonDetailTypes;

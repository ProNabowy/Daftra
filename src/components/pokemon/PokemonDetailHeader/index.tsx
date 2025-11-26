import { formatPokemonName } from "@/utils/formatters";

interface PokemonDetailHeaderProps {
	name: string;
	id: number;
}

function PokemonDetailHeader({ name, id }: PokemonDetailHeaderProps) {
	return (
		<div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 sm:px-6 py-6 sm:py-8 text-center">
			<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 px-2 break-words">
				{formatPokemonName(name)}
			</h1>
			<p className="text-base sm:text-lg md:text-xl text-white/90">
				#{String(id).padStart(3, "0")}
			</p>
		</div>
	);
}

export default PokemonDetailHeader;

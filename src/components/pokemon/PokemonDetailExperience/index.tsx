interface PokemonDetailExperienceProps {
	baseExperience: number;
}

function PokemonDetailExperience({
	baseExperience,
}: PokemonDetailExperienceProps) {
	return (
		<div>
			<h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
				Base Experience
			</h2>
			<p className="text-xl sm:text-2xl font-bold text-purple-600">
				{baseExperience} XP
			</p>
		</div>
	);
}

export default PokemonDetailExperience;

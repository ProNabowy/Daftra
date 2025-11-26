import { PokemonStat } from "@/types";
import { formatStatName } from "@/utils/formatters";
import StatBar from "../StatBar";

interface PokemonDetailStatsProps {
	stats: PokemonStat[];
}

function PokemonDetailStats({ stats }: PokemonDetailStatsProps) {
	return (
		<div>
			<h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
				Base Stats
			</h2>
			<div className="space-y-2 sm:space-y-3">
				{stats.map((stat) => (
					<StatBar
						key={stat.stat.name}
						label={formatStatName(stat.stat.name)}
						value={stat.base_stat}
					/>
				))}
			</div>
		</div>
	);
}

export default PokemonDetailStats;

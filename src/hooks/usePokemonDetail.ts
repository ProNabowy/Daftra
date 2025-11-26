import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../services/api";

export default function usePokemonDetail() {
	const { id } = useParams<{ id: string }>();

	const navigate = useNavigate();

	const pokemonId = id ? parseInt(id, 10) : 0;

	const {
		data: pokemon,
		isLoading,
		isFetching,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ["pokemon-detail", pokemonId],

		queryFn: () => fetchPokemonDetail(pokemonId),

		enabled: pokemonId > 0,
	});

	const handleBack = () => {
		navigate(-1);
	};

	return {
		pokemon,
		pokemonId,
		isLoading,
		isFetching,
		isError,
		error,
		refetch,
		handleBack,
	};
}

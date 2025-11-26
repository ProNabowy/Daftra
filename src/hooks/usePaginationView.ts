import { fetchPokemonList } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function usePaginationView() {
	const POKEMON_PER_PAGE = 20;

	const [currentPage, setCurrentPage] = useState(1);

	const navigate = useNavigate();

	const {
		data: pokemonListData,
		isLoading,
		isFetching,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ["pokemon-list", currentPage],
		queryFn: () => fetchPokemonList(currentPage, POKEMON_PER_PAGE),
	});

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });

		return () => {};
	}, [currentPage]);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const handlePokemonClick = (id: number) => {
		navigate(`/pokemon/${id}`);
	};

	const totalPages = pokemonListData
		? Math.ceil(pokemonListData.count / POKEMON_PER_PAGE)
		: 0;

	return {
		currentPage,
		setCurrentPage,
		pokemonListData,
		isLoading,
		isFetching,
		isError,
		error,
		refetch,
		handlePageChange,
		handlePokemonClick,
		totalPages,
	};
}

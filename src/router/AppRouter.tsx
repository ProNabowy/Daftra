import MainLayout from "@/layouts/MainLayout";
import LoadMoreView from "@/pages/LoadMoreView";
import PaginationView from "@/pages/PaginationView";
import PokemonDetail from "@/pages/PokemonDetail";
import { Route, Routes } from "react-router-dom";

function AppRouter() {
	return (
		<MainLayout>
			<Routes>
				<Route path="/" element={<PaginationView />} />
				<Route path="/load-more" element={<LoadMoreView />} />
				<Route path="/pokemon/:id" element={<PokemonDetail />} />
			</Routes>
		</MainLayout>
	);
}

export default AppRouter;

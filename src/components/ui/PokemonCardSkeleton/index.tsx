function PokemonCardSkeleton() {
	return (
		<div
			className="
        bg-white 
        rounded-xl sm:rounded-2xl
        border 
        border-gray-200 
        shadow-sm 
        p-3 sm:p-4 md:p-6 
        flex 
        flex-col 
        items-center 
        justify-center 
        aspect-square 
        animate-pulse
        min-h-[120px]
      "
		>
			<div className="mb-2 sm:mb-3 md:mb-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-200 rounded-full"></div>

			<div className="mb-0.5 sm:mb-1 h-3 sm:h-4 md:h-5 w-20 sm:w-24 bg-gray-200 rounded"></div>

			<div className="h-3 sm:h-4 w-12 sm:w-16 bg-gray-200 rounded"></div>
		</div>
	);
}

export default PokemonCardSkeleton;

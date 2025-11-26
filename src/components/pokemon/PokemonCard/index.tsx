import { PokemonCardProps } from "@/types";
import ImageWithFallback from "../../ui/ImageWithFallback";

function PokemonCard({ name, id, sprite, onClick }: PokemonCardProps) {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  
  const formattedId = `#${String(id).padStart(3, "0")}`;

  return (
    <div
      onClick={onClick}
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
        cursor-pointer 
        transition-all 
        duration-300 
        ease-in-out
        hover:-translate-y-1 
        hover:shadow-md
        active:scale-95
        min-h-[120px]
      "
    >
      <div className="mb-2 sm:mb-3 md:mb-4 flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-24 bg-[#f7f7f9]">
        <ImageWithFallback
          src={sprite}
          alt={name}
          className="w-full h-full object-contain"
          fallbackClassName="w-full h-full rounded-full"
        />
      </div>

      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 text-center mb-0.5 sm:mb-1 line-clamp-1 px-1">
        {formattedName}
      </h3>

      <p className="text-xs sm:text-sm text-gray-500 text-center">
        {formattedId}
      </p>
    </div>
  );
}

export default PokemonCard;

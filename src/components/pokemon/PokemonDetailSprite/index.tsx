import ImageWithFallback from "../../ui/ImageWithFallback";

interface PokemonDetailSpriteProps {
  sprite: string;
  name: string;
}

function PokemonDetailSprite({ sprite, name }: PokemonDetailSpriteProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-[#f7f8fa] shadow-lg p-3 sm:p-4 md:p-6 mb-3 sm:mb-4 flex items-center justify-center">
        <ImageWithFallback
          src={sprite}
          alt={name}
          className="w-full h-full"
          fallbackClassName="w-full h-full rounded-full"
        />
      </div>
    </div>
  );
}

export default PokemonDetailSprite;

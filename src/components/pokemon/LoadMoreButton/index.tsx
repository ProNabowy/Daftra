interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading: boolean;
  hasMore: boolean;
}

function LoadMoreButton({ onClick, isLoading, hasMore }: LoadMoreButtonProps) {
  if (!hasMore) {
    return <></>;
  }

  return (
    <div className="flex justify-center mt-6 sm:mt-8 px-2">
      <button
        onClick={onClick}
        disabled={isLoading}
        className="
          min-h-[44px]
          min-w-[150px]
          px-6 sm:px-8 
          py-3 
          bg-blue-600 
          text-white 
          font-semibold 
          rounded-lg 
          hover:bg-blue-700 
          active:bg-blue-800
          disabled:opacity-50 
          disabled:cursor-not-allowed 
          transition-colors
          text-sm sm:text-base
        "
      >
        {isLoading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}

export default LoadMoreButton;
